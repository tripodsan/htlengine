/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"){}; you may not use this file except in compliance with
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


module.exports = class Plugin {

    constructor(signature, pluginContext, expression) {
        this._signature = signature;
        this._pluginContext = pluginContext;
        this._expression = expression;
    }

    isValid() {
        return true;
    }

    get pluginContext() {
        return this._pluginContext;
    }

    get expression() {
        return this._expression;
    }

    beforeElement(stream, tagName) {
    };

    beforeTagOpen(stream) {
    };

    beforeAttributes(stream) {
    };

    beforeAttribute(stream, attributeName) {
    };

    beforeAttributeValue(stream, attributeName, attributeValue) {
    };

    afterAttributeValue(stream, attributeName) {
    };

    afterAttribute(stream, attributeName) {
    };

    onPluginCall(stream, signature, expression) {
    };

    afterAttributes(stream) {
    };

    afterTagOpen(stream) {
    };

    beforeChildren(stream) {
    };

    afterChildren(stream) {
    };

    beforeTagClose(stream, isSelfClosing) {
    };

    afterTagClose(stream, isSelfClosing) {
    };

    afterElement(stream) {
    };
};