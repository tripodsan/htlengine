/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
const MarkupHandler = require('./MarkupHandler');
const CommandStream = require('../commands/CommandStream');
const HTMLParser = require('./HTMLParser');


module.exports = class TemplateParser {

    /**
     * @param {antlr4.error.ErrorListener} listener Error listener
     * @returns {module.TemplateParser} This parser.
     */
    withErrorListener(listener) {
        this._errorListener = listener;
        return this;
    }

    /**
     * Parses the input and returns an the generated commands.
     * @param {String} input Input text
     * @return {Command[]} The generated commands
     */
    parse(input) {
        const stream = new CommandStream();
        const handler = new MarkupHandler(stream);

        HTMLParser.parse(input, handler);
        return stream.commands;
    }
};