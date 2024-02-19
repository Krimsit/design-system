/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cypress/support/commands.ts":
/*!*************************************!*\
  !*** ./cypress/support/commands.ts ***!
  \*************************************/
/***/ (() => {


/// <reference types="cypress" />
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    console.log('Custom command example: Login', email, password);
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kZXNpZ24tc3lzdGVtL2N5cHJlc3Mvc3VwcG9ydC9jb21tYW5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUNBQWlDO0FBcUJqQyxpQ0FBaUM7QUFDakMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFO0lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQy9ELENBQUMsQ0FBQyxDQUFBO0FBQ0YsRUFBRTtBQUNGLGdDQUFnQztBQUNoQyx5RkFBeUY7QUFDekYsRUFBRTtBQUNGLEVBQUU7QUFDRiwrQkFBK0I7QUFDL0IsNkZBQTZGO0FBQzdGLEVBQUU7QUFDRixFQUFFO0FBQ0YsZ0RBQWdEO0FBQ2hELDZFQUE2RSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBUaGlzIGV4YW1wbGUgY29tbWFuZHMudHMgc2hvd3MgeW91IGhvdyB0b1xuLy8gY3JlYXRlIHZhcmlvdXMgY3VzdG9tIGNvbW1hbmRzIGFuZCBvdmVyd3JpdGVcbi8vIGV4aXN0aW5nIGNvbW1hbmRzLlxuLy9cbi8vIEZvciBtb3JlIGNvbXByZWhlbnNpdmUgZXhhbXBsZXMgb2YgY3VzdG9tXG4vLyBjb21tYW5kcyBwbGVhc2UgcmVhZCBtb3JlIGhlcmU6XG4vLyBodHRwczovL29uLmN5cHJlc3MuaW8vY3VzdG9tLWNvbW1hbmRzXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZVxuZGVjbGFyZSBuYW1lc3BhY2UgQ3lwcmVzcyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgaW50ZXJmYWNlIENoYWluYWJsZTxTdWJqZWN0PiB7XG4gICAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWRcbiAgICB0YWtlU25hcHNob3QoKTogdm9pZFxuICB9XG59XG5cbi8vIC0tIFRoaXMgaXMgYSBwYXJlbnQgY29tbWFuZCAtLVxuQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ2xvZ2luJywgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICBjb25zb2xlLmxvZygnQ3VzdG9tIGNvbW1hbmQgZXhhbXBsZTogTG9naW4nLCBlbWFpbCwgcGFzc3dvcmQpXG59KVxuLy9cbi8vIC0tIFRoaXMgaXMgYSBjaGlsZCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZChcImRyYWdcIiwgeyBwcmV2U3ViamVjdDogJ2VsZW1lbnQnfSwgKHN1YmplY3QsIG9wdGlvbnMpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBkdWFsIGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKFwiZGlzbWlzc1wiLCB7IHByZXZTdWJqZWN0OiAnb3B0aW9uYWwnfSwgKHN1YmplY3QsIG9wdGlvbnMpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgd2lsbCBvdmVyd3JpdGUgYW4gZXhpc3RpbmcgY29tbWFuZCAtLVxuLy8gQ3lwcmVzcy5Db21tYW5kcy5vdmVyd3JpdGUoXCJ2aXNpdFwiLCAob3JpZ2luYWxGbiwgdXJsLCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuIl19

/***/ }),

/***/ "../../node_modules/@chromatic-com/cypress/dist/support.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/@chromatic-com/cypress/dist/support.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



var rrwebSnapshot = __webpack_require__(/*! rrweb-snapshot */ "../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js");

Cypress.Commands.add("takeSnapshot",e=>{Cypress.config("isTextTerminal")&&cy.document().then(s=>{let n=rrwebSnapshot.snapshot(s);cy.get("@manualSnapshots").then(r=>[...r,{name:e,snapshot:n}]).as("manualSnapshots");});});beforeEach(()=>{Cypress.config("isTextTerminal")&&(cy.wrap([]).as("manualSnapshots"),cy.task("prepareArchives",{action:"setup-network-listener",payload:{allowedDomains:Cypress.env("assetDomains")}}));});afterEach(()=>{Cypress.env("disableAutoSnapshot")||!Cypress.config("isTextTerminal")||cy.document().then(e=>{let s=rrwebSnapshot.snapshot(e);cy.get("@manualSnapshots").then((n=[])=>{cy.url().then(r=>{cy.task("prepareArchives",{action:"save-archives",payload:{testTitlePath:[Cypress.spec.relativeToCommonRoot,...Cypress.currentTest.titlePath],domSnapshots:[...n,{snapshot:s}],chromaticStorybookParams:{...Cypress.env("diffThreshold")&&{diffThreshold:Cypress.env("diffThreshold")},...Cypress.env("delay")&&{delay:Cypress.env("delay")},...Cypress.env("diffIncludeAntiAliasing")&&{diffIncludeAntiAliasing:Cypress.env("diffIncludeAntiAliasing")},...Cypress.env("diffThreshold")&&{diffThreshold:Cypress.env("diffThreshold")},...Cypress.env("forcedColors")&&{forcedColors:Cypress.env("forcedColors")},...Cypress.env("pauseAnimationAtEnd")&&{pauseAnimationAtEnd:Cypress.env("pauseAnimationAtEnd")},...Cypress.env("prefersReducedMotion")&&{prefersReducedMotion:Cypress.env("prefersReducedMotion")}},pageUrl:r}});});});});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=support.js.map

/***/ }),

/***/ "../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js":
/*!**************************************************************!*\
  !*** ../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IGNORED_NODE: () => (/* binding */ IGNORED_NODE),
/* harmony export */   Mirror: () => (/* binding */ Mirror),
/* harmony export */   NodeType: () => (/* binding */ NodeType),
/* harmony export */   addHoverClass: () => (/* binding */ addHoverClass),
/* harmony export */   buildNodeWithSN: () => (/* binding */ buildNodeWithSN),
/* harmony export */   classMatchesRegex: () => (/* binding */ classMatchesRegex),
/* harmony export */   cleanupSnapshot: () => (/* binding */ cleanupSnapshot),
/* harmony export */   createCache: () => (/* binding */ createCache),
/* harmony export */   createMirror: () => (/* binding */ createMirror),
/* harmony export */   escapeImportStatement: () => (/* binding */ escapeImportStatement),
/* harmony export */   genId: () => (/* binding */ genId),
/* harmony export */   getInputType: () => (/* binding */ getInputType),
/* harmony export */   ignoreAttribute: () => (/* binding */ ignoreAttribute),
/* harmony export */   is2DCanvasBlank: () => (/* binding */ is2DCanvasBlank),
/* harmony export */   isCSSImportRule: () => (/* binding */ isCSSImportRule),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isNativeShadowDom: () => (/* binding */ isNativeShadowDom),
/* harmony export */   isNodeMetaEqual: () => (/* binding */ isNodeMetaEqual),
/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot),
/* harmony export */   maskInputValue: () => (/* binding */ maskInputValue),
/* harmony export */   needMaskingText: () => (/* binding */ needMaskingText),
/* harmony export */   rebuild: () => (/* binding */ rebuild),
/* harmony export */   serializeNodeWithId: () => (/* binding */ serializeNodeWithId),
/* harmony export */   snapshot: () => (/* binding */ snapshot),
/* harmony export */   stringifyRule: () => (/* binding */ stringifyRule),
/* harmony export */   stringifyStylesheet: () => (/* binding */ stringifyStylesheet),
/* harmony export */   toLowerCase: () => (/* binding */ toLowerCase),
/* harmony export */   transformAttribute: () => (/* binding */ transformAttribute),
/* harmony export */   validateStringifiedCssRule: () => (/* binding */ validateStringifiedCssRule),
/* harmony export */   visitSnapshot: () => (/* binding */ visitSnapshot)
/* harmony export */ });
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Document"] = 0] = "Document";
    NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
    NodeType[NodeType["Element"] = 2] = "Element";
    NodeType[NodeType["Text"] = 3] = "Text";
    NodeType[NodeType["CDATA"] = 4] = "CDATA";
    NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (NodeType = {}));

function isElement(n) {
    return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
    var host = n === null || n === void 0 ? void 0 : n.host;
    return Boolean((host === null || host === void 0 ? void 0 : host.shadowRoot) === n);
}
function isNativeShadowDom(shadowRoot) {
    return Object.prototype.toString.call(shadowRoot) === '[object ShadowRoot]';
}
function fixBrowserCompatibilityIssuesInCSS(cssText) {
    if (cssText.includes(' background-clip: text;') &&
        !cssText.includes(' -webkit-background-clip: text;')) {
        cssText = cssText.replace(' background-clip: text;', ' -webkit-background-clip: text; background-clip: text;');
    }
    return cssText;
}
function escapeImportStatement(rule) {
    var cssText = rule.cssText;
    if (cssText.split('"').length < 3)
        return cssText;
    var statement = ['@import', "url(".concat(JSON.stringify(rule.href), ")")];
    if (rule.layerName === '') {
        statement.push("layer");
    }
    else if (rule.layerName) {
        statement.push("layer(".concat(rule.layerName, ")"));
    }
    if (rule.supportsText) {
        statement.push("supports(".concat(rule.supportsText, ")"));
    }
    if (rule.media.length) {
        statement.push(rule.media.mediaText);
    }
    return statement.join(' ') + ';';
}
function stringifyStylesheet(s) {
    try {
        var rules = s.rules || s.cssRules;
        return rules
            ? fixBrowserCompatibilityIssuesInCSS(Array.from(rules).map(stringifyRule).join(''))
            : null;
    }
    catch (error) {
        return null;
    }
}
function stringifyRule(rule) {
    var importStringified;
    if (isCSSImportRule(rule)) {
        try {
            importStringified =
                stringifyStylesheet(rule.styleSheet) ||
                    escapeImportStatement(rule);
        }
        catch (error) {
        }
    }
    return validateStringifiedCssRule(importStringified || rule.cssText);
}
function validateStringifiedCssRule(cssStringified) {
    if (cssStringified.includes(':')) {
        var regex = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
        return cssStringified.replace(regex, '$1\\$2');
    }
    return cssStringified;
}
function isCSSImportRule(rule) {
    return 'styleSheet' in rule;
}
var Mirror = (function () {
    function Mirror() {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    }
    Mirror.prototype.getId = function (n) {
        var _a;
        if (!n)
            return -1;
        var id = (_a = this.getMeta(n)) === null || _a === void 0 ? void 0 : _a.id;
        return id !== null && id !== void 0 ? id : -1;
    };
    Mirror.prototype.getNode = function (id) {
        return this.idNodeMap.get(id) || null;
    };
    Mirror.prototype.getIds = function () {
        return Array.from(this.idNodeMap.keys());
    };
    Mirror.prototype.getMeta = function (n) {
        return this.nodeMetaMap.get(n) || null;
    };
    Mirror.prototype.removeNodeFromMap = function (n) {
        var _this = this;
        var id = this.getId(n);
        this.idNodeMap["delete"](id);
        if (n.childNodes) {
            n.childNodes.forEach(function (childNode) {
                return _this.removeNodeFromMap(childNode);
            });
        }
    };
    Mirror.prototype.has = function (id) {
        return this.idNodeMap.has(id);
    };
    Mirror.prototype.hasNode = function (node) {
        return this.nodeMetaMap.has(node);
    };
    Mirror.prototype.add = function (n, meta) {
        var id = meta.id;
        this.idNodeMap.set(id, n);
        this.nodeMetaMap.set(n, meta);
    };
    Mirror.prototype.replace = function (id, n) {
        var oldNode = this.getNode(id);
        if (oldNode) {
            var meta = this.nodeMetaMap.get(oldNode);
            if (meta)
                this.nodeMetaMap.set(n, meta);
        }
        this.idNodeMap.set(id, n);
    };
    Mirror.prototype.reset = function () {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    };
    return Mirror;
}());
function createMirror() {
    return new Mirror();
}
function maskInputValue(_a) {
    var element = _a.element, maskInputOptions = _a.maskInputOptions, tagName = _a.tagName, type = _a.type, value = _a.value, maskInputFn = _a.maskInputFn;
    var text = value || '';
    var actualType = type && toLowerCase(type);
    if (maskInputOptions[tagName.toLowerCase()] ||
        (actualType && maskInputOptions[actualType])) {
        if (maskInputFn) {
            text = maskInputFn(text, element);
        }
        else {
            text = '*'.repeat(text.length);
        }
    }
    return text;
}
function toLowerCase(str) {
    return str.toLowerCase();
}
var ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
function is2DCanvasBlank(canvas) {
    var ctx = canvas.getContext('2d');
    if (!ctx)
        return true;
    var chunkSize = 50;
    for (var x = 0; x < canvas.width; x += chunkSize) {
        for (var y = 0; y < canvas.height; y += chunkSize) {
            var getImageData = ctx.getImageData;
            var originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData
                ? getImageData[ORIGINAL_ATTRIBUTE_NAME]
                : getImageData;
            var pixelBuffer = new Uint32Array(originalGetImageData.call(ctx, x, y, Math.min(chunkSize, canvas.width - x), Math.min(chunkSize, canvas.height - y)).data.buffer);
            if (pixelBuffer.some(function (pixel) { return pixel !== 0; }))
                return false;
        }
    }
    return true;
}
function isNodeMetaEqual(a, b) {
    if (!a || !b || a.type !== b.type)
        return false;
    if (a.type === NodeType.Document)
        return a.compatMode === b.compatMode;
    else if (a.type === NodeType.DocumentType)
        return (a.name === b.name &&
            a.publicId === b.publicId &&
            a.systemId === b.systemId);
    else if (a.type === NodeType.Comment ||
        a.type === NodeType.Text ||
        a.type === NodeType.CDATA)
        return a.textContent === b.textContent;
    else if (a.type === NodeType.Element)
        return (a.tagName === b.tagName &&
            JSON.stringify(a.attributes) ===
                JSON.stringify(b.attributes) &&
            a.isSVG === b.isSVG &&
            a.needBlock === b.needBlock);
    return false;
}
function getInputType(element) {
    var type = element.type;
    return element.hasAttribute('data-rr-is-password')
        ? 'password'
        : type
            ?
                toLowerCase(type)
            : null;
}

var _id = 1;
var tagNameRegex = new RegExp('[^a-z0-9-_:]');
var IGNORED_NODE = -2;
function genId() {
    return _id++;
}
function getValidTagName(element) {
    if (element instanceof HTMLFormElement) {
        return 'form';
    }
    var processedTagName = toLowerCase(element.tagName);
    if (tagNameRegex.test(processedTagName)) {
        return 'div';
    }
    return processedTagName;
}
function extractOrigin(url) {
    var origin = '';
    if (url.indexOf('//') > -1) {
        origin = url.split('/').slice(0, 3).join('/');
    }
    else {
        origin = url.split('/')[0];
    }
    origin = origin.split('?')[0];
    return origin;
}
var canvasService;
var canvasCtx;
var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
var URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i;
var URL_WWW_MATCH = /^www\..*/i;
var DATA_URI = /^(data:)([^,]*),(.*)/i;
function absoluteToStylesheet(cssText, href) {
    return (cssText || '').replace(URL_IN_CSS_REF, function (origin, quote1, path1, quote2, path2, path3) {
        var filePath = path1 || path2 || path3;
        var maybeQuote = quote1 || quote2 || '';
        if (!filePath) {
            return origin;
        }
        if (URL_PROTOCOL_MATCH.test(filePath) || URL_WWW_MATCH.test(filePath)) {
            return "url(".concat(maybeQuote).concat(filePath).concat(maybeQuote, ")");
        }
        if (DATA_URI.test(filePath)) {
            return "url(".concat(maybeQuote).concat(filePath).concat(maybeQuote, ")");
        }
        if (filePath[0] === '/') {
            return "url(".concat(maybeQuote).concat(extractOrigin(href) + filePath).concat(maybeQuote, ")");
        }
        var stack = href.split('/');
        var parts = filePath.split('/');
        stack.pop();
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            if (part === '.') {
                continue;
            }
            else if (part === '..') {
                stack.pop();
            }
            else {
                stack.push(part);
            }
        }
        return "url(".concat(maybeQuote).concat(stack.join('/')).concat(maybeQuote, ")");
    });
}
var SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
var SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
    if (attributeValue.trim() === '') {
        return attributeValue;
    }
    var pos = 0;
    function collectCharacters(regEx) {
        var chars;
        var match = regEx.exec(attributeValue.substring(pos));
        if (match) {
            chars = match[0];
            pos += chars.length;
            return chars;
        }
        return '';
    }
    var output = [];
    while (true) {
        collectCharacters(SRCSET_COMMAS_OR_SPACES);
        if (pos >= attributeValue.length) {
            break;
        }
        var url = collectCharacters(SRCSET_NOT_SPACES);
        if (url.slice(-1) === ',') {
            url = absoluteToDoc(doc, url.substring(0, url.length - 1));
            output.push(url);
        }
        else {
            var descriptorsStr = '';
            url = absoluteToDoc(doc, url);
            var inParens = false;
            while (true) {
                var c = attributeValue.charAt(pos);
                if (c === '') {
                    output.push((url + descriptorsStr).trim());
                    break;
                }
                else if (!inParens) {
                    if (c === ',') {
                        pos += 1;
                        output.push((url + descriptorsStr).trim());
                        break;
                    }
                    else if (c === '(') {
                        inParens = true;
                    }
                }
                else {
                    if (c === ')') {
                        inParens = false;
                    }
                }
                descriptorsStr += c;
                pos += 1;
            }
        }
    }
    return output.join(', ');
}
function absoluteToDoc(doc, attributeValue) {
    if (!attributeValue || attributeValue.trim() === '') {
        return attributeValue;
    }
    var a = doc.createElement('a');
    a.href = attributeValue;
    return a.href;
}
function isSVGElement(el) {
    return Boolean(el.tagName === 'svg' || el.ownerSVGElement);
}
function getHref() {
    var a = document.createElement('a');
    a.href = '';
    return a.href;
}
function transformAttribute(doc, tagName, name, value) {
    if (!value) {
        return value;
    }
    if (name === 'src' ||
        (name === 'href' && !(tagName === 'use' && value[0] === '#'))) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'xlink:href' && value[0] !== '#') {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'background' &&
        (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'srcset') {
        return getAbsoluteSrcsetString(doc, value);
    }
    else if (name === 'style') {
        return absoluteToStylesheet(value, getHref());
    }
    else if (tagName === 'object' && name === 'data') {
        return absoluteToDoc(doc, value);
    }
    return value;
}
function ignoreAttribute(tagName, name, _value) {
    return (tagName === 'video' || tagName === 'audio') && name === 'autoplay';
}
function _isBlockedElement(element, blockClass, blockSelector) {
    try {
        if (typeof blockClass === 'string') {
            if (element.classList.contains(blockClass)) {
                return true;
            }
        }
        else {
            for (var eIndex = element.classList.length; eIndex--;) {
                var className = element.classList[eIndex];
                if (blockClass.test(className)) {
                    return true;
                }
            }
        }
        if (blockSelector) {
            return element.matches(blockSelector);
        }
    }
    catch (e) {
    }
    return false;
}
function classMatchesRegex(node, regex, checkAncestors) {
    if (!node)
        return false;
    if (node.nodeType !== node.ELEMENT_NODE) {
        if (!checkAncestors)
            return false;
        return classMatchesRegex(node.parentNode, regex, checkAncestors);
    }
    for (var eIndex = node.classList.length; eIndex--;) {
        var className = node.classList[eIndex];
        if (regex.test(className)) {
            return true;
        }
    }
    if (!checkAncestors)
        return false;
    return classMatchesRegex(node.parentNode, regex, checkAncestors);
}
function needMaskingText(node, maskTextClass, maskTextSelector) {
    try {
        var el = node.nodeType === node.ELEMENT_NODE
            ? node
            : node.parentElement;
        if (el === null)
            return false;
        if (typeof maskTextClass === 'string') {
            if (el.classList.contains(maskTextClass))
                return true;
            if (el.closest(".".concat(maskTextClass)))
                return true;
        }
        else {
            if (classMatchesRegex(el, maskTextClass, true))
                return true;
        }
        if (maskTextSelector) {
            if (el.matches(maskTextSelector))
                return true;
            if (el.closest(maskTextSelector))
                return true;
        }
    }
    catch (e) {
    }
    return false;
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
    var win = iframeEl.contentWindow;
    if (!win) {
        return;
    }
    var fired = false;
    var readyState;
    try {
        readyState = win.document.readyState;
    }
    catch (error) {
        return;
    }
    if (readyState !== 'complete') {
        var timer_1 = setTimeout(function () {
            if (!fired) {
                listener();
                fired = true;
            }
        }, iframeLoadTimeout);
        iframeEl.addEventListener('load', function () {
            clearTimeout(timer_1);
            fired = true;
            listener();
        });
        return;
    }
    var blankUrl = 'about:blank';
    if (win.location.href !== blankUrl ||
        iframeEl.src === blankUrl ||
        iframeEl.src === '') {
        setTimeout(listener, 0);
        return iframeEl.addEventListener('load', listener);
    }
    iframeEl.addEventListener('load', listener);
}
function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
    var fired = false;
    var styleSheetLoaded;
    try {
        styleSheetLoaded = link.sheet;
    }
    catch (error) {
        return;
    }
    if (styleSheetLoaded)
        return;
    var timer = setTimeout(function () {
        if (!fired) {
            listener();
            fired = true;
        }
    }, styleSheetLoadTimeout);
    link.addEventListener('load', function () {
        clearTimeout(timer);
        fired = true;
        listener();
    });
}
function serializeNode(n, options) {
    var doc = options.doc, mirror = options.mirror, blockClass = options.blockClass, blockSelector = options.blockSelector, maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, inlineStylesheet = options.inlineStylesheet, _a = options.maskInputOptions, maskInputOptions = _a === void 0 ? {} : _a, maskTextFn = options.maskTextFn, maskInputFn = options.maskInputFn, _b = options.dataURLOptions, dataURLOptions = _b === void 0 ? {} : _b, inlineImages = options.inlineImages, recordCanvas = options.recordCanvas, keepIframeSrcFn = options.keepIframeSrcFn, _c = options.newlyAddedElement, newlyAddedElement = _c === void 0 ? false : _c;
    var rootId = getRootId(doc, mirror);
    switch (n.nodeType) {
        case n.DOCUMENT_NODE:
            if (n.compatMode !== 'CSS1Compat') {
                return {
                    type: NodeType.Document,
                    childNodes: [],
                    compatMode: n.compatMode
                };
            }
            else {
                return {
                    type: NodeType.Document,
                    childNodes: []
                };
            }
        case n.DOCUMENT_TYPE_NODE:
            return {
                type: NodeType.DocumentType,
                name: n.name,
                publicId: n.publicId,
                systemId: n.systemId,
                rootId: rootId
            };
        case n.ELEMENT_NODE:
            return serializeElementNode(n, {
                doc: doc,
                blockClass: blockClass,
                blockSelector: blockSelector,
                inlineStylesheet: inlineStylesheet,
                maskInputOptions: maskInputOptions,
                maskInputFn: maskInputFn,
                dataURLOptions: dataURLOptions,
                inlineImages: inlineImages,
                recordCanvas: recordCanvas,
                keepIframeSrcFn: keepIframeSrcFn,
                newlyAddedElement: newlyAddedElement,
                rootId: rootId
            });
        case n.TEXT_NODE:
            return serializeTextNode(n, {
                maskTextClass: maskTextClass,
                maskTextSelector: maskTextSelector,
                maskTextFn: maskTextFn,
                rootId: rootId
            });
        case n.CDATA_SECTION_NODE:
            return {
                type: NodeType.CDATA,
                textContent: '',
                rootId: rootId
            };
        case n.COMMENT_NODE:
            return {
                type: NodeType.Comment,
                textContent: n.textContent || '',
                rootId: rootId
            };
        default:
            return false;
    }
}
function getRootId(doc, mirror) {
    if (!mirror.hasNode(doc))
        return undefined;
    var docId = mirror.getId(doc);
    return docId === 1 ? undefined : docId;
}
function serializeTextNode(n, options) {
    var _a;
    var maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, maskTextFn = options.maskTextFn, rootId = options.rootId;
    var parentTagName = n.parentNode && n.parentNode.tagName;
    var textContent = n.textContent;
    var isStyle = parentTagName === 'STYLE' ? true : undefined;
    var isScript = parentTagName === 'SCRIPT' ? true : undefined;
    if (isStyle && textContent) {
        try {
            if (n.nextSibling || n.previousSibling) {
            }
            else if ((_a = n.parentNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) {
                textContent = stringifyStylesheet(n.parentNode.sheet);
            }
        }
        catch (err) {
            console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(err), n);
        }
        textContent = absoluteToStylesheet(textContent, getHref());
    }
    if (isScript) {
        textContent = 'SCRIPT_PLACEHOLDER';
    }
    if (!isStyle &&
        !isScript &&
        textContent &&
        needMaskingText(n, maskTextClass, maskTextSelector)) {
        textContent = maskTextFn
            ? maskTextFn(textContent)
            : textContent.replace(/[\S]/g, '*');
    }
    return {
        type: NodeType.Text,
        textContent: textContent || '',
        isStyle: isStyle,
        rootId: rootId
    };
}
function serializeElementNode(n, options) {
    var doc = options.doc, blockClass = options.blockClass, blockSelector = options.blockSelector, inlineStylesheet = options.inlineStylesheet, _a = options.maskInputOptions, maskInputOptions = _a === void 0 ? {} : _a, maskInputFn = options.maskInputFn, _b = options.dataURLOptions, dataURLOptions = _b === void 0 ? {} : _b, inlineImages = options.inlineImages, recordCanvas = options.recordCanvas, keepIframeSrcFn = options.keepIframeSrcFn, _c = options.newlyAddedElement, newlyAddedElement = _c === void 0 ? false : _c, rootId = options.rootId;
    var needBlock = _isBlockedElement(n, blockClass, blockSelector);
    var tagName = getValidTagName(n);
    var attributes = {};
    var len = n.attributes.length;
    for (var i = 0; i < len; i++) {
        var attr = n.attributes[i];
        if (!ignoreAttribute(tagName, attr.name, attr.value)) {
            attributes[attr.name] = transformAttribute(doc, tagName, toLowerCase(attr.name), attr.value);
        }
    }
    if (tagName === 'link' && inlineStylesheet) {
        var stylesheet = Array.from(doc.styleSheets).find(function (s) {
            return s.href === n.href;
        });
        var cssText = null;
        if (stylesheet) {
            cssText = stringifyStylesheet(stylesheet);
        }
        if (cssText) {
            delete attributes.rel;
            delete attributes.href;
            attributes._cssText = absoluteToStylesheet(cssText, stylesheet.href);
        }
    }
    if (tagName === 'style' &&
        n.sheet &&
        !(n.innerText || n.textContent || '').trim().length) {
        var cssText = stringifyStylesheet(n.sheet);
        if (cssText) {
            attributes._cssText = absoluteToStylesheet(cssText, getHref());
        }
    }
    if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        var value = n.value;
        var checked = n.checked;
        if (attributes.type !== 'radio' &&
            attributes.type !== 'checkbox' &&
            attributes.type !== 'submit' &&
            attributes.type !== 'button' &&
            value) {
            var type = getInputType(n);
            attributes.value = maskInputValue({
                element: n,
                type: type,
                tagName: tagName,
                value: value,
                maskInputOptions: maskInputOptions,
                maskInputFn: maskInputFn
            });
        }
        else if (checked) {
            attributes.checked = checked;
        }
    }
    if (tagName === 'option') {
        if (n.selected && !maskInputOptions['select']) {
            attributes.selected = true;
        }
        else {
            delete attributes.selected;
        }
    }
    if (tagName === 'canvas' && recordCanvas) {
        if (n.__context === '2d') {
            if (!is2DCanvasBlank(n)) {
                attributes.rr_dataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            }
        }
        else if (!('__context' in n)) {
            var canvasDataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            var blankCanvas = document.createElement('canvas');
            blankCanvas.width = n.width;
            blankCanvas.height = n.height;
            var blankCanvasDataURL = blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            if (canvasDataURL !== blankCanvasDataURL) {
                attributes.rr_dataURL = canvasDataURL;
            }
        }
    }
    if (tagName === 'img' && inlineImages) {
        if (!canvasService) {
            canvasService = doc.createElement('canvas');
            canvasCtx = canvasService.getContext('2d');
        }
        var image_1 = n;
        var oldValue_1 = image_1.crossOrigin;
        image_1.crossOrigin = 'anonymous';
        var recordInlineImage_1 = function () {
            image_1.removeEventListener('load', recordInlineImage_1);
            try {
                canvasService.width = image_1.naturalWidth;
                canvasService.height = image_1.naturalHeight;
                canvasCtx.drawImage(image_1, 0, 0);
                attributes.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            }
            catch (err) {
                console.warn("Cannot inline img src=".concat(image_1.currentSrc, "! Error: ").concat(err));
            }
            oldValue_1
                ? (attributes.crossOrigin = oldValue_1)
                : image_1.removeAttribute('crossorigin');
        };
        if (image_1.complete && image_1.naturalWidth !== 0)
            recordInlineImage_1();
        else
            image_1.addEventListener('load', recordInlineImage_1);
    }
    if (tagName === 'audio' || tagName === 'video') {
        attributes.rr_mediaState = n.paused
            ? 'paused'
            : 'played';
        attributes.rr_mediaCurrentTime = n.currentTime;
    }
    if (!newlyAddedElement) {
        if (n.scrollLeft) {
            attributes.rr_scrollLeft = n.scrollLeft;
        }
        if (n.scrollTop) {
            attributes.rr_scrollTop = n.scrollTop;
        }
    }
    if (needBlock) {
        var _d = n.getBoundingClientRect(), width = _d.width, height = _d.height;
        attributes = {
            "class": attributes["class"],
            rr_width: "".concat(width, "px"),
            rr_height: "".concat(height, "px")
        };
    }
    if (tagName === 'iframe' && !keepIframeSrcFn(attributes.src)) {
        if (!n.contentDocument) {
            attributes.rr_src = attributes.src;
        }
        delete attributes.src;
    }
    return {
        type: NodeType.Element,
        tagName: tagName,
        attributes: attributes,
        childNodes: [],
        isSVG: isSVGElement(n) || undefined,
        needBlock: needBlock,
        rootId: rootId
    };
}
function lowerIfExists(maybeAttr) {
    if (maybeAttr === undefined || maybeAttr === null) {
        return '';
    }
    else {
        return maybeAttr.toLowerCase();
    }
}
function slimDOMExcluded(sn, slimDOMOptions) {
    if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
        return true;
    }
    else if (sn.type === NodeType.Element) {
        if (slimDOMOptions.script &&
            (sn.tagName === 'script' ||
                (sn.tagName === 'link' &&
                    (sn.attributes.rel === 'preload' ||
                        sn.attributes.rel === 'modulepreload') &&
                    sn.attributes.as === 'script') ||
                (sn.tagName === 'link' &&
                    sn.attributes.rel === 'prefetch' &&
                    typeof sn.attributes.href === 'string' &&
                    sn.attributes.href.endsWith('.js')))) {
            return true;
        }
        else if (slimDOMOptions.headFavicon &&
            ((sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon') ||
                (sn.tagName === 'meta' &&
                    (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                        lowerIfExists(sn.attributes.name) === 'application-name' ||
                        lowerIfExists(sn.attributes.rel) === 'icon' ||
                        lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' ||
                        lowerIfExists(sn.attributes.rel) === 'shortcut icon')))) {
            return true;
        }
        else if (sn.tagName === 'meta') {
            if (slimDOMOptions.headMetaDescKeywords &&
                lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
                return true;
            }
            else if (slimDOMOptions.headMetaSocial &&
                (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) ||
                    lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) ||
                    lowerIfExists(sn.attributes.name) === 'pinterest')) {
                return true;
            }
            else if (slimDOMOptions.headMetaRobots &&
                (lowerIfExists(sn.attributes.name) === 'robots' ||
                    lowerIfExists(sn.attributes.name) === 'googlebot' ||
                    lowerIfExists(sn.attributes.name) === 'bingbot')) {
                return true;
            }
            else if (slimDOMOptions.headMetaHttpEquiv &&
                sn.attributes['http-equiv'] !== undefined) {
                return true;
            }
            else if (slimDOMOptions.headMetaAuthorship &&
                (lowerIfExists(sn.attributes.name) === 'author' ||
                    lowerIfExists(sn.attributes.name) === 'generator' ||
                    lowerIfExists(sn.attributes.name) === 'framework' ||
                    lowerIfExists(sn.attributes.name) === 'publisher' ||
                    lowerIfExists(sn.attributes.name) === 'progid' ||
                    lowerIfExists(sn.attributes.property).match(/^article:/) ||
                    lowerIfExists(sn.attributes.property).match(/^product:/))) {
                return true;
            }
            else if (slimDOMOptions.headMetaVerification &&
                (lowerIfExists(sn.attributes.name) === 'google-site-verification' ||
                    lowerIfExists(sn.attributes.name) === 'yandex-verification' ||
                    lowerIfExists(sn.attributes.name) === 'csrf-token' ||
                    lowerIfExists(sn.attributes.name) === 'p:domain_verify' ||
                    lowerIfExists(sn.attributes.name) === 'verify-v1' ||
                    lowerIfExists(sn.attributes.name) === 'verification' ||
                    lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
                return true;
            }
        }
    }
    return false;
}
function serializeNodeWithId(n, options) {
    var doc = options.doc, mirror = options.mirror, blockClass = options.blockClass, blockSelector = options.blockSelector, maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, _a = options.skipChild, skipChild = _a === void 0 ? false : _a, _b = options.inlineStylesheet, inlineStylesheet = _b === void 0 ? true : _b, _c = options.maskInputOptions, maskInputOptions = _c === void 0 ? {} : _c, maskTextFn = options.maskTextFn, maskInputFn = options.maskInputFn, slimDOMOptions = options.slimDOMOptions, _d = options.dataURLOptions, dataURLOptions = _d === void 0 ? {} : _d, _e = options.inlineImages, inlineImages = _e === void 0 ? false : _e, _f = options.recordCanvas, recordCanvas = _f === void 0 ? false : _f, onSerialize = options.onSerialize, onIframeLoad = options.onIframeLoad, _g = options.iframeLoadTimeout, iframeLoadTimeout = _g === void 0 ? 5000 : _g, onStylesheetLoad = options.onStylesheetLoad, _h = options.stylesheetLoadTimeout, stylesheetLoadTimeout = _h === void 0 ? 5000 : _h, _j = options.keepIframeSrcFn, keepIframeSrcFn = _j === void 0 ? function () { return false; } : _j, _k = options.newlyAddedElement, newlyAddedElement = _k === void 0 ? false : _k;
    var _l = options.preserveWhiteSpace, preserveWhiteSpace = _l === void 0 ? true : _l;
    var _serializedNode = serializeNode(n, {
        doc: doc,
        mirror: mirror,
        blockClass: blockClass,
        blockSelector: blockSelector,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        inlineStylesheet: inlineStylesheet,
        maskInputOptions: maskInputOptions,
        maskTextFn: maskTextFn,
        maskInputFn: maskInputFn,
        dataURLOptions: dataURLOptions,
        inlineImages: inlineImages,
        recordCanvas: recordCanvas,
        keepIframeSrcFn: keepIframeSrcFn,
        newlyAddedElement: newlyAddedElement
    });
    if (!_serializedNode) {
        console.warn(n, 'not serialized');
        return null;
    }
    var id;
    if (mirror.hasNode(n)) {
        id = mirror.getId(n);
    }
    else if (slimDOMExcluded(_serializedNode, slimDOMOptions) ||
        (!preserveWhiteSpace &&
            _serializedNode.type === NodeType.Text &&
            !_serializedNode.isStyle &&
            !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length)) {
        id = IGNORED_NODE;
    }
    else {
        id = genId();
    }
    var serializedNode = Object.assign(_serializedNode, { id: id });
    mirror.add(n, serializedNode);
    if (id === IGNORED_NODE) {
        return null;
    }
    if (onSerialize) {
        onSerialize(n);
    }
    var recordChild = !skipChild;
    if (serializedNode.type === NodeType.Element) {
        recordChild = recordChild && !serializedNode.needBlock;
        delete serializedNode.needBlock;
        var shadowRoot = n.shadowRoot;
        if (shadowRoot && isNativeShadowDom(shadowRoot))
            serializedNode.isShadowHost = true;
    }
    if ((serializedNode.type === NodeType.Document ||
        serializedNode.type === NodeType.Element) &&
        recordChild) {
        if (slimDOMOptions.headWhitespace &&
            serializedNode.type === NodeType.Element &&
            serializedNode.tagName === 'head') {
            preserveWhiteSpace = false;
        }
        var bypassOptions = {
            doc: doc,
            mirror: mirror,
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            skipChild: skipChild,
            inlineStylesheet: inlineStylesheet,
            maskInputOptions: maskInputOptions,
            maskTextFn: maskTextFn,
            maskInputFn: maskInputFn,
            slimDOMOptions: slimDOMOptions,
            dataURLOptions: dataURLOptions,
            inlineImages: inlineImages,
            recordCanvas: recordCanvas,
            preserveWhiteSpace: preserveWhiteSpace,
            onSerialize: onSerialize,
            onIframeLoad: onIframeLoad,
            iframeLoadTimeout: iframeLoadTimeout,
            onStylesheetLoad: onStylesheetLoad,
            stylesheetLoadTimeout: stylesheetLoadTimeout,
            keepIframeSrcFn: keepIframeSrcFn
        };
        for (var _i = 0, _m = Array.from(n.childNodes); _i < _m.length; _i++) {
            var childN = _m[_i];
            var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
            if (serializedChildNode) {
                serializedNode.childNodes.push(serializedChildNode);
            }
        }
        if (isElement(n) && n.shadowRoot) {
            for (var _o = 0, _p = Array.from(n.shadowRoot.childNodes); _o < _p.length; _o++) {
                var childN = _p[_o];
                var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                if (serializedChildNode) {
                    isNativeShadowDom(n.shadowRoot) &&
                        (serializedChildNode.isShadow = true);
                    serializedNode.childNodes.push(serializedChildNode);
                }
            }
        }
    }
    if (n.parentNode &&
        isShadowRoot(n.parentNode) &&
        isNativeShadowDom(n.parentNode)) {
        serializedNode.isShadow = true;
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'iframe') {
        onceIframeLoaded(n, function () {
            var iframeDoc = n.contentDocument;
            if (iframeDoc && onIframeLoad) {
                var serializedIframeNode = serializeNodeWithId(iframeDoc, {
                    doc: iframeDoc,
                    mirror: mirror,
                    blockClass: blockClass,
                    blockSelector: blockSelector,
                    maskTextClass: maskTextClass,
                    maskTextSelector: maskTextSelector,
                    skipChild: false,
                    inlineStylesheet: inlineStylesheet,
                    maskInputOptions: maskInputOptions,
                    maskTextFn: maskTextFn,
                    maskInputFn: maskInputFn,
                    slimDOMOptions: slimDOMOptions,
                    dataURLOptions: dataURLOptions,
                    inlineImages: inlineImages,
                    recordCanvas: recordCanvas,
                    preserveWhiteSpace: preserveWhiteSpace,
                    onSerialize: onSerialize,
                    onIframeLoad: onIframeLoad,
                    iframeLoadTimeout: iframeLoadTimeout,
                    onStylesheetLoad: onStylesheetLoad,
                    stylesheetLoadTimeout: stylesheetLoadTimeout,
                    keepIframeSrcFn: keepIframeSrcFn
                });
                if (serializedIframeNode) {
                    onIframeLoad(n, serializedIframeNode);
                }
            }
        }, iframeLoadTimeout);
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'link' &&
        serializedNode.attributes.rel === 'stylesheet') {
        onceStylesheetLoaded(n, function () {
            if (onStylesheetLoad) {
                var serializedLinkNode = serializeNodeWithId(n, {
                    doc: doc,
                    mirror: mirror,
                    blockClass: blockClass,
                    blockSelector: blockSelector,
                    maskTextClass: maskTextClass,
                    maskTextSelector: maskTextSelector,
                    skipChild: false,
                    inlineStylesheet: inlineStylesheet,
                    maskInputOptions: maskInputOptions,
                    maskTextFn: maskTextFn,
                    maskInputFn: maskInputFn,
                    slimDOMOptions: slimDOMOptions,
                    dataURLOptions: dataURLOptions,
                    inlineImages: inlineImages,
                    recordCanvas: recordCanvas,
                    preserveWhiteSpace: preserveWhiteSpace,
                    onSerialize: onSerialize,
                    onIframeLoad: onIframeLoad,
                    iframeLoadTimeout: iframeLoadTimeout,
                    onStylesheetLoad: onStylesheetLoad,
                    stylesheetLoadTimeout: stylesheetLoadTimeout,
                    keepIframeSrcFn: keepIframeSrcFn
                });
                if (serializedLinkNode) {
                    onStylesheetLoad(n, serializedLinkNode);
                }
            }
        }, stylesheetLoadTimeout);
    }
    return serializedNode;
}
function snapshot(n, options) {
    var _a = options || {}, _b = _a.mirror, mirror = _b === void 0 ? new Mirror() : _b, _c = _a.blockClass, blockClass = _c === void 0 ? 'rr-block' : _c, _d = _a.blockSelector, blockSelector = _d === void 0 ? null : _d, _e = _a.maskTextClass, maskTextClass = _e === void 0 ? 'rr-mask' : _e, _f = _a.maskTextSelector, maskTextSelector = _f === void 0 ? null : _f, _g = _a.inlineStylesheet, inlineStylesheet = _g === void 0 ? true : _g, _h = _a.inlineImages, inlineImages = _h === void 0 ? false : _h, _j = _a.recordCanvas, recordCanvas = _j === void 0 ? false : _j, _k = _a.maskAllInputs, maskAllInputs = _k === void 0 ? false : _k, maskTextFn = _a.maskTextFn, maskInputFn = _a.maskInputFn, _l = _a.slimDOM, slimDOM = _l === void 0 ? false : _l, dataURLOptions = _a.dataURLOptions, preserveWhiteSpace = _a.preserveWhiteSpace, onSerialize = _a.onSerialize, onIframeLoad = _a.onIframeLoad, iframeLoadTimeout = _a.iframeLoadTimeout, onStylesheetLoad = _a.onStylesheetLoad, stylesheetLoadTimeout = _a.stylesheetLoadTimeout, _m = _a.keepIframeSrcFn, keepIframeSrcFn = _m === void 0 ? function () { return false; } : _m;
    var maskInputOptions = maskAllInputs === true
        ? {
            color: true,
            date: true,
            'datetime-local': true,
            email: true,
            month: true,
            number: true,
            range: true,
            search: true,
            tel: true,
            text: true,
            time: true,
            url: true,
            week: true,
            textarea: true,
            select: true,
            password: true
        }
        : maskAllInputs === false
            ? {
                password: true
            }
            : maskAllInputs;
    var slimDOMOptions = slimDOM === true || slimDOM === 'all'
        ?
            {
                script: true,
                comment: true,
                headFavicon: true,
                headWhitespace: true,
                headMetaDescKeywords: slimDOM === 'all',
                headMetaSocial: true,
                headMetaRobots: true,
                headMetaHttpEquiv: true,
                headMetaAuthorship: true,
                headMetaVerification: true
            }
        : slimDOM === false
            ? {}
            : slimDOM;
    return serializeNodeWithId(n, {
        doc: n,
        mirror: mirror,
        blockClass: blockClass,
        blockSelector: blockSelector,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        skipChild: false,
        inlineStylesheet: inlineStylesheet,
        maskInputOptions: maskInputOptions,
        maskTextFn: maskTextFn,
        maskInputFn: maskInputFn,
        slimDOMOptions: slimDOMOptions,
        dataURLOptions: dataURLOptions,
        inlineImages: inlineImages,
        recordCanvas: recordCanvas,
        preserveWhiteSpace: preserveWhiteSpace,
        onSerialize: onSerialize,
        onIframeLoad: onIframeLoad,
        iframeLoadTimeout: iframeLoadTimeout,
        onStylesheetLoad: onStylesheetLoad,
        stylesheetLoadTimeout: stylesheetLoadTimeout,
        keepIframeSrcFn: keepIframeSrcFn,
        newlyAddedElement: false
    });
}
function visitSnapshot(node, onVisit) {
    function walk(current) {
        onVisit(current);
        if (current.type === NodeType.Document ||
            current.type === NodeType.Element) {
            current.childNodes.forEach(walk);
        }
    }
    walk(node);
}
function cleanupSnapshot() {
    _id = 1;
}

var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
function parse(css, options) {
    if (options === void 0) { options = {}; }
    var lineno = 1;
    var column = 1;
    function updatePosition(str) {
        var lines = str.match(/\n/g);
        if (lines) {
            lineno += lines.length;
        }
        var i = str.lastIndexOf('\n');
        column = i === -1 ? column + str.length : str.length - i;
    }
    function position() {
        var start = { line: lineno, column: column };
        return function (node) {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    var Position = (function () {
        function Position(start) {
            this.start = start;
            this.end = { line: lineno, column: column };
            this.source = options.source;
        }
        return Position;
    }());
    Position.prototype.content = css;
    var errorsList = [];
    function error(msg) {
        var err = new Error("".concat(options.source || '', ":").concat(lineno, ":").concat(column, ": ").concat(msg));
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = css;
        if (options.silent) {
            errorsList.push(err);
        }
        else {
            throw err;
        }
    }
    function stylesheet() {
        var rulesList = rules();
        return {
            type: 'stylesheet',
            stylesheet: {
                source: options.source,
                rules: rulesList,
                parsingErrors: errorsList
            }
        };
    }
    function open() {
        return match(/^{\s*/);
    }
    function close() {
        return match(/^}/);
    }
    function rules() {
        var node;
        var rules = [];
        whitespace();
        comments(rules);
        while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
            if (node) {
                rules.push(node);
                comments(rules);
            }
        }
        return rules;
    }
    function match(re) {
        var m = re.exec(css);
        if (!m) {
            return;
        }
        var str = m[0];
        updatePosition(str);
        css = css.slice(str.length);
        return m;
    }
    function whitespace() {
        match(/^\s*/);
    }
    function comments(rules) {
        if (rules === void 0) { rules = []; }
        var c;
        while ((c = comment())) {
            if (c) {
                rules.push(c);
            }
            c = comment();
        }
        return rules;
    }
    function comment() {
        var pos = position();
        if ('/' !== css.charAt(0) || '*' !== css.charAt(1)) {
            return;
        }
        var i = 2;
        while ('' !== css.charAt(i) &&
            ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1))) {
            ++i;
        }
        i += 2;
        if ('' === css.charAt(i - 1)) {
            return error('End of comment missing');
        }
        var str = css.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        css = css.slice(i);
        column += 2;
        return pos({
            type: 'comment',
            comment: str
        });
    }
    function selector() {
        var m = match(/^([^{]+)/);
        if (!m) {
            return;
        }
        return trim(m[0])
            .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
            .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
            return m.replace(/,/g, '\u200C');
        })
            .split(/\s*(?![^(]*\)),\s*/)
            .map(function (s) {
            return s.replace(/\u200C/g, ',');
        });
    }
    function declaration() {
        var pos = position();
        var propMatch = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
        if (!propMatch) {
            return;
        }
        var prop = trim(propMatch[0]);
        if (!match(/^:\s*/)) {
            return error("property missing ':'");
        }
        var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
        var ret = pos({
            type: 'declaration',
            property: prop.replace(commentre, ''),
            value: val ? trim(val[0]).replace(commentre, '') : ''
        });
        match(/^[;\s]*/);
        return ret;
    }
    function declarations() {
        var decls = [];
        if (!open()) {
            return error("missing '{'");
        }
        comments(decls);
        var decl;
        while ((decl = declaration())) {
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
            decl = declaration();
        }
        if (!close()) {
            return error("missing '}'");
        }
        return decls;
    }
    function keyframe() {
        var m;
        var vals = [];
        var pos = position();
        while ((m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/))) {
            vals.push(m[1]);
            match(/^,\s*/);
        }
        if (!vals.length) {
            return;
        }
        return pos({
            type: 'keyframe',
            values: vals,
            declarations: declarations()
        });
    }
    function atkeyframes() {
        var pos = position();
        var m = match(/^@([-\w]+)?keyframes\s*/);
        if (!m) {
            return;
        }
        var vendor = m[1];
        m = match(/^([-\w]+)\s*/);
        if (!m) {
            return error('@keyframes missing name');
        }
        var name = m[1];
        if (!open()) {
            return error("@keyframes missing '{'");
        }
        var frame;
        var frames = comments();
        while ((frame = keyframe())) {
            frames.push(frame);
            frames = frames.concat(comments());
        }
        if (!close()) {
            return error("@keyframes missing '}'");
        }
        return pos({
            type: 'keyframes',
            name: name,
            vendor: vendor,
            keyframes: frames
        });
    }
    function atsupports() {
        var pos = position();
        var m = match(/^@supports *([^{]+)/);
        if (!m) {
            return;
        }
        var supports = trim(m[1]);
        if (!open()) {
            return error("@supports missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@supports missing '}'");
        }
        return pos({
            type: 'supports',
            supports: supports,
            rules: style
        });
    }
    function athost() {
        var pos = position();
        var m = match(/^@host\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error("@host missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@host missing '}'");
        }
        return pos({
            type: 'host',
            rules: style
        });
    }
    function atmedia() {
        var pos = position();
        var m = match(/^@media *([^{]+)/);
        if (!m) {
            return;
        }
        var media = trim(m[1]);
        if (!open()) {
            return error("@media missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@media missing '}'");
        }
        return pos({
            type: 'media',
            media: media,
            rules: style
        });
    }
    function atcustommedia() {
        var pos = position();
        var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
        if (!m) {
            return;
        }
        return pos({
            type: 'custom-media',
            name: trim(m[1]),
            media: trim(m[2])
        });
    }
    function atpage() {
        var pos = position();
        var m = match(/^@page */);
        if (!m) {
            return;
        }
        var sel = selector() || [];
        if (!open()) {
            return error("@page missing '{'");
        }
        var decls = comments();
        var decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error("@page missing '}'");
        }
        return pos({
            type: 'page',
            selectors: sel,
            declarations: decls
        });
    }
    function atdocument() {
        var pos = position();
        var m = match(/^@([-\w]+)?document *([^{]+)/);
        if (!m) {
            return;
        }
        var vendor = trim(m[1]);
        var doc = trim(m[2]);
        if (!open()) {
            return error("@document missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@document missing '}'");
        }
        return pos({
            type: 'document',
            document: doc,
            vendor: vendor,
            rules: style
        });
    }
    function atfontface() {
        var pos = position();
        var m = match(/^@font-face\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error("@font-face missing '{'");
        }
        var decls = comments();
        var decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error("@font-face missing '}'");
        }
        return pos({
            type: 'font-face',
            declarations: decls
        });
    }
    var atimport = _compileAtrule('import');
    var atcharset = _compileAtrule('charset');
    var atnamespace = _compileAtrule('namespace');
    function _compileAtrule(name) {
        var re = new RegExp('^@' + name + '\\s*([^;]+);');
        return function () {
            var pos = position();
            var m = match(re);
            if (!m) {
                return;
            }
            var ret = { type: name };
            ret[name] = m[1].trim();
            return pos(ret);
        };
    }
    function atrule() {
        if (css[0] !== '@') {
            return;
        }
        return (atkeyframes() ||
            atmedia() ||
            atcustommedia() ||
            atsupports() ||
            atimport() ||
            atcharset() ||
            atnamespace() ||
            atdocument() ||
            atpage() ||
            athost() ||
            atfontface());
    }
    function rule() {
        var pos = position();
        var sel = selector();
        if (!sel) {
            return error('selector missing');
        }
        comments();
        return pos({
            type: 'rule',
            selectors: sel,
            declarations: declarations()
        });
    }
    return addParent(stylesheet());
}
function trim(str) {
    return str ? str.replace(/^\s+|\s+$/g, '') : '';
}
function addParent(obj, parent) {
    var isNode = obj && typeof obj.type === 'string';
    var childParent = isNode ? obj : parent;
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var k = _a[_i];
        var value = obj[k];
        if (Array.isArray(value)) {
            value.forEach(function (v) {
                addParent(v, childParent);
            });
        }
        else if (value && typeof value === 'object') {
            addParent(value, childParent);
        }
    }
    if (isNode) {
        Object.defineProperty(obj, 'parent', {
            configurable: true,
            writable: true,
            enumerable: false,
            value: parent || null
        });
    }
    return obj;
}

var tagMap = {
    script: 'noscript',
    altglyph: 'altGlyph',
    altglyphdef: 'altGlyphDef',
    altglyphitem: 'altGlyphItem',
    animatecolor: 'animateColor',
    animatemotion: 'animateMotion',
    animatetransform: 'animateTransform',
    clippath: 'clipPath',
    feblend: 'feBlend',
    fecolormatrix: 'feColorMatrix',
    fecomponenttransfer: 'feComponentTransfer',
    fecomposite: 'feComposite',
    feconvolvematrix: 'feConvolveMatrix',
    fediffuselighting: 'feDiffuseLighting',
    fedisplacementmap: 'feDisplacementMap',
    fedistantlight: 'feDistantLight',
    fedropshadow: 'feDropShadow',
    feflood: 'feFlood',
    fefunca: 'feFuncA',
    fefuncb: 'feFuncB',
    fefuncg: 'feFuncG',
    fefuncr: 'feFuncR',
    fegaussianblur: 'feGaussianBlur',
    feimage: 'feImage',
    femerge: 'feMerge',
    femergenode: 'feMergeNode',
    femorphology: 'feMorphology',
    feoffset: 'feOffset',
    fepointlight: 'fePointLight',
    fespecularlighting: 'feSpecularLighting',
    fespotlight: 'feSpotLight',
    fetile: 'feTile',
    feturbulence: 'feTurbulence',
    foreignobject: 'foreignObject',
    glyphref: 'glyphRef',
    lineargradient: 'linearGradient',
    radialgradient: 'radialGradient'
};
function getTagName(n) {
    var tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
    if (tagName === 'link' && n.attributes._cssText) {
        tagName = 'style';
    }
    return tagName;
}
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
var HOVER_SELECTOR = /([^\\]):hover/;
var HOVER_SELECTOR_GLOBAL = new RegExp(HOVER_SELECTOR.source, 'g');
function addHoverClass(cssText, cache) {
    var cachedStyle = cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.get(cssText);
    if (cachedStyle)
        return cachedStyle;
    var ast = parse(cssText, {
        silent: true
    });
    if (!ast.stylesheet) {
        return cssText;
    }
    var selectors = [];
    ast.stylesheet.rules.forEach(function (rule) {
        if ('selectors' in rule) {
            (rule.selectors || []).forEach(function (selector) {
                if (HOVER_SELECTOR.test(selector)) {
                    selectors.push(selector);
                }
            });
        }
    });
    if (selectors.length === 0) {
        return cssText;
    }
    var selectorMatcher = new RegExp(selectors
        .filter(function (selector, index) { return selectors.indexOf(selector) === index; })
        .sort(function (a, b) { return b.length - a.length; })
        .map(function (selector) {
        return escapeRegExp(selector);
    })
        .join('|'), 'g');
    var result = cssText.replace(selectorMatcher, function (selector) {
        var newSelector = selector.replace(HOVER_SELECTOR_GLOBAL, '$1.\\:hover');
        return "".concat(selector, ", ").concat(newSelector);
    });
    cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.set(cssText, result);
    return result;
}
function createCache() {
    var stylesWithHoverClass = new Map();
    return {
        stylesWithHoverClass: stylesWithHoverClass
    };
}
function buildNode(n, options) {
    var doc = options.doc, hackCss = options.hackCss, cache = options.cache;
    switch (n.type) {
        case NodeType.Document:
            return doc.implementation.createDocument(null, '', null);
        case NodeType.DocumentType:
            return doc.implementation.createDocumentType(n.name || 'html', n.publicId, n.systemId);
        case NodeType.Element: {
            var tagName = getTagName(n);
            var node_1;
            if (n.isSVG) {
                node_1 = doc.createElementNS('http://www.w3.org/2000/svg', tagName);
            }
            else {
                node_1 = doc.createElement(tagName);
            }
            var specialAttributes = {};
            for (var name_1 in n.attributes) {
                if (!Object.prototype.hasOwnProperty.call(n.attributes, name_1)) {
                    continue;
                }
                var value = n.attributes[name_1];
                if (tagName === 'option' &&
                    name_1 === 'selected' &&
                    value === false) {
                    continue;
                }
                if (value === null) {
                    continue;
                }
                if (value === true)
                    value = '';
                if (name_1.startsWith('rr_')) {
                    specialAttributes[name_1] = value;
                    continue;
                }
                var isTextarea = tagName === 'textarea' && name_1 === 'value';
                var isRemoteOrDynamicCss = tagName === 'style' && name_1 === '_cssText';
                if (isRemoteOrDynamicCss && hackCss && typeof value === 'string') {
                    value = addHoverClass(value, cache);
                }
                if ((isTextarea || isRemoteOrDynamicCss) && typeof value === 'string') {
                    var child = doc.createTextNode(value);
                    for (var _i = 0, _a = Array.from(node_1.childNodes); _i < _a.length; _i++) {
                        var c = _a[_i];
                        if (c.nodeType === node_1.TEXT_NODE) {
                            node_1.removeChild(c);
                        }
                    }
                    node_1.appendChild(child);
                    continue;
                }
                try {
                    if (n.isSVG && name_1 === 'xlink:href') {
                        node_1.setAttributeNS('http://www.w3.org/1999/xlink', name_1, value.toString());
                    }
                    else if (name_1 === 'onload' ||
                        name_1 === 'onclick' ||
                        name_1.substring(0, 7) === 'onmouse') {
                        node_1.setAttribute('_' + name_1, value.toString());
                    }
                    else if (tagName === 'meta' &&
                        n.attributes['http-equiv'] === 'Content-Security-Policy' &&
                        name_1 === 'content') {
                        node_1.setAttribute('csp-content', value.toString());
                        continue;
                    }
                    else if (tagName === 'link' &&
                        (n.attributes.rel === 'preload' ||
                            n.attributes.rel === 'modulepreload') &&
                        n.attributes.as === 'script') {
                    }
                    else if (tagName === 'link' &&
                        n.attributes.rel === 'prefetch' &&
                        typeof n.attributes.href === 'string' &&
                        n.attributes.href.endsWith('.js')) {
                    }
                    else if (tagName === 'img' &&
                        n.attributes.srcset &&
                        n.attributes.rr_dataURL) {
                        node_1.setAttribute('rrweb-original-srcset', n.attributes.srcset);
                    }
                    else {
                        node_1.setAttribute(name_1, value.toString());
                    }
                }
                catch (error) {
                }
            }
            var _loop_1 = function (name_2) {
                var value = specialAttributes[name_2];
                if (tagName === 'canvas' && name_2 === 'rr_dataURL') {
                    var image_1 = document.createElement('img');
                    image_1.onload = function () {
                        var ctx = node_1.getContext('2d');
                        if (ctx) {
                            ctx.drawImage(image_1, 0, 0, image_1.width, image_1.height);
                        }
                    };
                    image_1.src = value.toString();
                    if (node_1.RRNodeType)
                        node_1.rr_dataURL = value.toString();
                }
                else if (tagName === 'img' && name_2 === 'rr_dataURL') {
                    var image = node_1;
                    if (!image.currentSrc.startsWith('data:')) {
                        image.setAttribute('rrweb-original-src', n.attributes.src);
                        image.src = value.toString();
                    }
                }
                if (name_2 === 'rr_width') {
                    node_1.style.width = value.toString();
                }
                else if (name_2 === 'rr_height') {
                    node_1.style.height = value.toString();
                }
                else if (name_2 === 'rr_mediaCurrentTime' &&
                    typeof value === 'number') {
                    node_1.currentTime = value;
                }
                else if (name_2 === 'rr_mediaState') {
                    switch (value) {
                        case 'played':
                            node_1
                                .play()["catch"](function (e) { return console.warn('media playback error', e); });
                            break;
                        case 'paused':
                            node_1.pause();
                            break;
                    }
                }
            };
            for (var name_2 in specialAttributes) {
                _loop_1(name_2);
            }
            if (n.isShadowHost) {
                if (!node_1.shadowRoot) {
                    node_1.attachShadow({ mode: 'open' });
                }
                else {
                    while (node_1.shadowRoot.firstChild) {
                        node_1.shadowRoot.removeChild(node_1.shadowRoot.firstChild);
                    }
                }
            }
            return node_1;
        }
        case NodeType.Text:
            return doc.createTextNode(n.isStyle && hackCss
                ? addHoverClass(n.textContent, cache)
                : n.textContent);
        case NodeType.CDATA:
            return doc.createCDATASection(n.textContent);
        case NodeType.Comment:
            return doc.createComment(n.textContent);
        default:
            return null;
    }
}
function buildNodeWithSN(n, options) {
    var doc = options.doc, mirror = options.mirror, _a = options.skipChild, skipChild = _a === void 0 ? false : _a, _b = options.hackCss, hackCss = _b === void 0 ? true : _b, afterAppend = options.afterAppend, cache = options.cache;
    if (mirror.has(n.id)) {
        var nodeInMirror = mirror.getNode(n.id);
        var meta = mirror.getMeta(nodeInMirror);
        if (isNodeMetaEqual(meta, n))
            return mirror.getNode(n.id);
    }
    var node = buildNode(n, { doc: doc, hackCss: hackCss, cache: cache });
    if (!node) {
        return null;
    }
    if (n.rootId && mirror.getNode(n.rootId) !== doc) {
        mirror.replace(n.rootId, doc);
    }
    if (n.type === NodeType.Document) {
        doc.close();
        doc.open();
        if (n.compatMode === 'BackCompat' &&
            n.childNodes &&
            n.childNodes[0].type !== NodeType.DocumentType) {
            if (n.childNodes[0].type === NodeType.Element &&
                'xmlns' in n.childNodes[0].attributes &&
                n.childNodes[0].attributes.xmlns === 'http://www.w3.org/1999/xhtml') {
                doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">');
            }
            else {
                doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">');
            }
        }
        node = doc;
    }
    mirror.add(node, n);
    if ((n.type === NodeType.Document || n.type === NodeType.Element) &&
        !skipChild) {
        var _loop_2 = function (childN) {
            var childNode = buildNodeWithSN(childN, {
                doc: doc,
                mirror: mirror,
                skipChild: false,
                hackCss: hackCss,
                afterAppend: afterAppend,
                cache: cache
            });
            if (!childNode) {
                console.warn('Failed to rebuild', childN);
                return "continue";
            }
            if (childN.isShadow && isElement(node) && node.shadowRoot) {
                node.shadowRoot.appendChild(childNode);
            }
            else if (n.type === NodeType.Document &&
                childN.type == NodeType.Element) {
                var htmlElement = childNode;
                var body_1 = null;
                htmlElement.childNodes.forEach(function (child) {
                    if (child.nodeName === 'BODY')
                        body_1 = child;
                });
                if (body_1) {
                    htmlElement.removeChild(body_1);
                    node.appendChild(childNode);
                    htmlElement.appendChild(body_1);
                }
                else {
                    node.appendChild(childNode);
                }
            }
            else {
                node.appendChild(childNode);
            }
            if (afterAppend) {
                afterAppend(childNode, childN.id);
            }
        };
        for (var _i = 0, _c = n.childNodes; _i < _c.length; _i++) {
            var childN = _c[_i];
            _loop_2(childN);
        }
    }
    return node;
}
function visit(mirror, onVisit) {
    function walk(node) {
        onVisit(node);
    }
    for (var _i = 0, _a = mirror.getIds(); _i < _a.length; _i++) {
        var id = _a[_i];
        if (mirror.has(id)) {
            walk(mirror.getNode(id));
        }
    }
}
function handleScroll(node, mirror) {
    var n = mirror.getMeta(node);
    if ((n === null || n === void 0 ? void 0 : n.type) !== NodeType.Element) {
        return;
    }
    var el = node;
    for (var name_3 in n.attributes) {
        if (!(Object.prototype.hasOwnProperty.call(n.attributes, name_3) &&
            name_3.startsWith('rr_'))) {
            continue;
        }
        var value = n.attributes[name_3];
        if (name_3 === 'rr_scrollLeft') {
            el.scrollLeft = value;
        }
        if (name_3 === 'rr_scrollTop') {
            el.scrollTop = value;
        }
    }
}
function rebuild(n, options) {
    var doc = options.doc, onVisit = options.onVisit, _a = options.hackCss, hackCss = _a === void 0 ? true : _a, afterAppend = options.afterAppend, cache = options.cache, _b = options.mirror, mirror = _b === void 0 ? new Mirror() : _b;
    var node = buildNodeWithSN(n, {
        doc: doc,
        mirror: mirror,
        skipChild: false,
        hackCss: hackCss,
        afterAppend: afterAppend,
        cache: cache
    });
    visit(mirror, function (visitedNode) {
        if (onVisit) {
            onVisit(visitedNode);
        }
        handleScroll(visitedNode, mirror);
    });
    return node;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./cypress/support/e2e.ts ***!
  \********************************/

// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
Object.defineProperty(exports, "__esModule", ({ value: true }));
// Import commands.ts using ES2015 syntax:
__webpack_require__(/*! ./commands */ "./cypress/support/commands.ts");
__webpack_require__(/*! @chromatic-com/cypress/support */ "../../node_modules/@chromatic-com/cypress/dist/support.js");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGVzaWduLXN5c3RlbS9jeXByZXNzL3N1cHBvcnQvZTJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4REFBOEQ7QUFDOUQsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQyxFQUFFO0FBQ0Ysd0RBQXdEO0FBQ3hELGtDQUFrQztBQUNsQyxFQUFFO0FBQ0YsdURBQXVEO0FBQ3ZELCtDQUErQztBQUMvQyxzQ0FBc0M7QUFDdEMsRUFBRTtBQUNGLDBCQUEwQjtBQUMxQixzQ0FBc0M7QUFDdEMsOERBQThEOztBQUU5RCwwQ0FBMEM7QUFDMUMsc0JBQW1CO0FBQ25CLDBDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBUaGlzIGV4YW1wbGUgc3VwcG9ydC9lMmUudHMgaXMgcHJvY2Vzc2VkIGFuZFxuLy8gbG9hZGVkIGF1dG9tYXRpY2FsbHkgYmVmb3JlIHlvdXIgdGVzdCBmaWxlcy5cbi8vXG4vLyBUaGlzIGlzIGEgZ3JlYXQgcGxhY2UgdG8gcHV0IGdsb2JhbCBjb25maWd1cmF0aW9uIGFuZFxuLy8gYmVoYXZpb3IgdGhhdCBtb2RpZmllcyBDeXByZXNzLlxuLy9cbi8vIFlvdSBjYW4gY2hhbmdlIHRoZSBsb2NhdGlvbiBvZiB0aGlzIGZpbGUgb3IgdHVybiBvZmZcbi8vIGF1dG9tYXRpY2FsbHkgc2VydmluZyBzdXBwb3J0IGZpbGVzIHdpdGggdGhlXG4vLyAnc3VwcG9ydEZpbGUnIGNvbmZpZ3VyYXRpb24gb3B0aW9uLlxuLy9cbi8vIFlvdSBjYW4gcmVhZCBtb3JlIGhlcmU6XG4vLyBodHRwczovL29uLmN5cHJlc3MuaW8vY29uZmlndXJhdGlvblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8gSW1wb3J0IGNvbW1hbmRzLnRzIHVzaW5nIEVTMjAxNSBzeW50YXg6XG5pbXBvcnQgJy4vY29tbWFuZHMnXG5pbXBvcnQgJ0BjaHJvbWF0aWMtY29tL2N5cHJlc3Mvc3VwcG9ydCdcbiJdfQ==
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxrQ0FBa0MsdUJBQXVCLDBCQUEwQixLQUFLO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx3QkFBd0IsMEJBQTBCLEtBQUs7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLEtBQUs7QUFDNUUsMkNBQTJDOzs7Ozs7Ozs7O0FDakI5Qjs7QUFFYixvQkFBb0IsbUJBQU8sQ0FBQyw4RUFBZ0I7O0FBRTVDLHdDQUF3Qyx5REFBeUQsZ0NBQWdDLDBDQUEwQyxrQkFBa0IsMEJBQTBCLEdBQUcsRUFBRSxnQkFBZ0IsZ0dBQWdHLHlDQUF5Qyw0Q0FBNEMsSUFBSSxFQUFFLGVBQWUsOEZBQThGLGdDQUFnQyx5Q0FBeUMsa0JBQWtCLDJCQUEyQixnQ0FBZ0MsdUdBQXVHLFdBQVcsNEJBQTRCLGtDQUFrQywyQ0FBMkMsMkJBQTJCLDJCQUEyQiw2Q0FBNkMsK0RBQStELG1DQUFtQywyQ0FBMkMsa0NBQWtDLHlDQUF5Qyx5Q0FBeUMsdURBQXVELDBDQUEwQywwREFBMEQsWUFBWSxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQzU1QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pELDBEQUEwRDtBQUMxRCwwREFBMEQsb0NBQW9DLHNCQUFzQjtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0Qyx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QscUJBQXFCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsU0FBUztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrVUFBa1UsMklBQTJJO0FBQzdjO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscU5BQXFOLDBHQUEwRztBQUMvVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa2FBQWthLG9MQUFvTCwyZkFBMmYsZ0JBQWdCO0FBQ2ptQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxRQUFRO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZ0JBQWdCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGdCQUFnQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBpQ0FBMGlDLGdCQUFnQjtBQUNwbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMERBQTBELElBQUk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsSUFBSTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGdCQUFnQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLCtDQUErQztBQUM1RixnQ0FBZ0MsNkJBQTZCO0FBQzdEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsZ0JBQWdCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsaURBQWlEO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMENBQTBDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZ0JBQWdCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFOGQ7Ozs7Ozs7VUM3NEQ5ZDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7QUNOYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQSxtQkFBTyxDQUFDLGlEQUFZO0FBQ3BCLG1CQUFPLENBQUMsaUdBQWdDO0FBQ3hDLDJDQUEyQyxtMUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jeXByZXNzL3N1cHBvcnQvY29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AY2hyb21hdGljLWNvbS9jeXByZXNzL2Rpc3Qvc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL3Jyd2ViLXNuYXBzaG90L2VzL3Jyd2ViLXNuYXBzaG90LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2N5cHJlc3Mvc3VwcG9ydC9lMmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxuLy8gLS0gVGhpcyBpcyBhIHBhcmVudCBjb21tYW5kIC0tXG5DeXByZXNzLkNvbW1hbmRzLmFkZCgnbG9naW4nLCAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0N1c3RvbSBjb21tYW5kIGV4YW1wbGU6IExvZ2luJywgZW1haWwsIHBhc3N3b3JkKTtcbn0pO1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBjaGlsZCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZChcImRyYWdcIiwgeyBwcmV2U3ViamVjdDogJ2VsZW1lbnQnfSwgKHN1YmplY3QsIG9wdGlvbnMpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBkdWFsIGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKFwiZGlzbWlzc1wiLCB7IHByZXZTdWJqZWN0OiAnb3B0aW9uYWwnfSwgKHN1YmplY3QsIG9wdGlvbnMpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgd2lsbCBvdmVyd3JpdGUgYW4gZXhpc3RpbmcgY29tbWFuZCAtLVxuLy8gQ3lwcmVzcy5Db21tYW5kcy5vdmVyd3JpdGUoXCJ2aXNpdFwiLCAob3JpZ2luYWxGbiwgdXJsLCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGJXRnVaSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5a1pYTnBaMjR0YzNsemRHVnRMMk41Y0hKbGMzTXZjM1Z3Y0c5eWRDOWpiMjF0WVc1a2N5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2FVTkJRV2xETzBGQmNVSnFReXhwUTBGQmFVTTdRVUZEYWtNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJTeEZRVUZGTzBsQlEyaEVMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zSzBKQlFTdENMRVZCUVVVc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZCTzBGQlF5OUVMRU5CUVVNc1EwRkJReXhEUVVGQk8wRkJRMFlzUlVGQlJUdEJRVU5HTEdkRFFVRm5RenRCUVVOb1F5eDVSa0ZCZVVZN1FVRkRla1lzUlVGQlJUdEJRVU5HTEVWQlFVVTdRVUZEUml3clFrRkJLMEk3UVVGREwwSXNOa1pCUVRaR08wRkJRemRHTEVWQlFVVTdRVUZEUml4RlFVRkZPMEZCUTBZc1owUkJRV2RFTzBGQlEyaEVMRFpGUVVFMlJTSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2THlBOGNtVm1aWEpsYm1ObElIUjVjR1Z6UFZ3aVkzbHdjbVZ6YzF3aUlDOCtYRzVjYmk4dklDb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzR2THlCVWFHbHpJR1Y0WVcxd2JHVWdZMjl0YldGdVpITXVkSE1nYzJodmQzTWdlVzkxSUdodmR5QjBiMXh1THk4Z1kzSmxZWFJsSUhaaGNtbHZkWE1nWTNWemRHOXRJR052YlcxaGJtUnpJR0Z1WkNCdmRtVnlkM0pwZEdWY2JpOHZJR1Y0YVhOMGFXNW5JR052YlcxaGJtUnpMbHh1THk5Y2JpOHZJRVp2Y2lCdGIzSmxJR052YlhCeVpXaGxibk5wZG1VZ1pYaGhiWEJzWlhNZ2IyWWdZM1Z6ZEc5dFhHNHZMeUJqYjIxdFlXNWtjeUJ3YkdWaGMyVWdjbVZoWkNCdGIzSmxJR2hsY21VNlhHNHZMeUJvZEhSd2N6b3ZMMjl1TG1ONWNISmxjM011YVc4dlkzVnpkRzl0TFdOdmJXMWhibVJ6WEc0dkx5QXFLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1WEc0dkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ1FIUjVjR1Z6WTNKcGNIUXRaWE5zYVc1MEwyNXZMVzVoYldWemNHRmpaVnh1WkdWamJHRnlaU0J1WVcxbGMzQmhZMlVnUTNsd2NtVnpjeUI3WEc0Z0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQkFkSGx3WlhOamNtbHdkQzFsYzJ4cGJuUXZibTh0ZFc1MWMyVmtMWFpoY25OY2JpQWdhVzUwWlhKbVlXTmxJRU5vWVdsdVlXSnNaVHhUZFdKcVpXTjBQaUI3WEc0Z0lDQWdiRzluYVc0b1pXMWhhV3c2SUhOMGNtbHVaeXdnY0dGemMzZHZjbVE2SUhOMGNtbHVaeWs2SUhadmFXUmNiaUFnSUNCMFlXdGxVMjVoY0hOb2IzUW9LVG9nZG05cFpGeHVJQ0I5WEc1OVhHNWNiaTh2SUMwdElGUm9hWE1nYVhNZ1lTQndZWEpsYm5RZ1kyOXRiV0Z1WkNBdExWeHVRM2x3Y21WemN5NURiMjF0WVc1a2N5NWhaR1FvSjJ4dloybHVKeXdnS0dWdFlXbHNMQ0J3WVhOemQyOXlaQ2tnUFQ0Z2UxeHVJQ0JqYjI1emIyeGxMbXh2WnlnblEzVnpkRzl0SUdOdmJXMWhibVFnWlhoaGJYQnNaVG9nVEc5bmFXNG5MQ0JsYldGcGJDd2djR0Z6YzNkdmNtUXBYRzU5S1Z4dUx5OWNiaTh2SUMwdElGUm9hWE1nYVhNZ1lTQmphR2xzWkNCamIyMXRZVzVrSUMwdFhHNHZMeUJEZVhCeVpYTnpMa052YlcxaGJtUnpMbUZrWkNoY0ltUnlZV2RjSWl3Z2V5QndjbVYyVTNWaWFtVmpkRG9nSjJWc1pXMWxiblFuZlN3Z0tITjFZbXBsWTNRc0lHOXdkR2x2Ym5NcElEMCtJSHNnTGk0dUlIMHBYRzR2TDF4dUx5OWNiaTh2SUMwdElGUm9hWE1nYVhNZ1lTQmtkV0ZzSUdOdmJXMWhibVFnTFMxY2JpOHZJRU41Y0hKbGMzTXVRMjl0YldGdVpITXVZV1JrS0Z3aVpHbHpiV2x6YzF3aUxDQjdJSEJ5WlhaVGRXSnFaV04wT2lBbmIzQjBhVzl1WVd3bmZTd2dLSE4xWW1wbFkzUXNJRzl3ZEdsdmJuTXBJRDArSUhzZ0xpNHVJSDBwWEc0dkwxeHVMeTljYmk4dklDMHRJRlJvYVhNZ2QybHNiQ0J2ZG1WeWQzSnBkR1VnWVc0Z1pYaHBjM1JwYm1jZ1kyOXRiV0Z1WkNBdExWeHVMeThnUTNsd2NtVnpjeTVEYjIxdFlXNWtjeTV2ZG1WeWQzSnBkR1VvWENKMmFYTnBkRndpTENBb2IzSnBaMmx1WVd4R2Jpd2dkWEpzTENCdmNIUnBiMjV6S1NBOVBpQjdJQzR1TGlCOUtWeHVJbDE5IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcnJ3ZWJTbmFwc2hvdCA9IHJlcXVpcmUoJ3Jyd2ViLXNuYXBzaG90Jyk7XG5cbkN5cHJlc3MuQ29tbWFuZHMuYWRkKFwidGFrZVNuYXBzaG90XCIsZT0+e0N5cHJlc3MuY29uZmlnKFwiaXNUZXh0VGVybWluYWxcIikmJmN5LmRvY3VtZW50KCkudGhlbihzPT57bGV0IG49cnJ3ZWJTbmFwc2hvdC5zbmFwc2hvdChzKTtjeS5nZXQoXCJAbWFudWFsU25hcHNob3RzXCIpLnRoZW4ocj0+Wy4uLnIse25hbWU6ZSxzbmFwc2hvdDpufV0pLmFzKFwibWFudWFsU25hcHNob3RzXCIpO30pO30pO2JlZm9yZUVhY2goKCk9PntDeXByZXNzLmNvbmZpZyhcImlzVGV4dFRlcm1pbmFsXCIpJiYoY3kud3JhcChbXSkuYXMoXCJtYW51YWxTbmFwc2hvdHNcIiksY3kudGFzayhcInByZXBhcmVBcmNoaXZlc1wiLHthY3Rpb246XCJzZXR1cC1uZXR3b3JrLWxpc3RlbmVyXCIscGF5bG9hZDp7YWxsb3dlZERvbWFpbnM6Q3lwcmVzcy5lbnYoXCJhc3NldERvbWFpbnNcIil9fSkpO30pO2FmdGVyRWFjaCgoKT0+e0N5cHJlc3MuZW52KFwiZGlzYWJsZUF1dG9TbmFwc2hvdFwiKXx8IUN5cHJlc3MuY29uZmlnKFwiaXNUZXh0VGVybWluYWxcIil8fGN5LmRvY3VtZW50KCkudGhlbihlPT57bGV0IHM9cnJ3ZWJTbmFwc2hvdC5zbmFwc2hvdChlKTtjeS5nZXQoXCJAbWFudWFsU25hcHNob3RzXCIpLnRoZW4oKG49W10pPT57Y3kudXJsKCkudGhlbihyPT57Y3kudGFzayhcInByZXBhcmVBcmNoaXZlc1wiLHthY3Rpb246XCJzYXZlLWFyY2hpdmVzXCIscGF5bG9hZDp7dGVzdFRpdGxlUGF0aDpbQ3lwcmVzcy5zcGVjLnJlbGF0aXZlVG9Db21tb25Sb290LC4uLkN5cHJlc3MuY3VycmVudFRlc3QudGl0bGVQYXRoXSxkb21TbmFwc2hvdHM6Wy4uLm4se3NuYXBzaG90OnN9XSxjaHJvbWF0aWNTdG9yeWJvb2tQYXJhbXM6ey4uLkN5cHJlc3MuZW52KFwiZGlmZlRocmVzaG9sZFwiKSYme2RpZmZUaHJlc2hvbGQ6Q3lwcmVzcy5lbnYoXCJkaWZmVGhyZXNob2xkXCIpfSwuLi5DeXByZXNzLmVudihcImRlbGF5XCIpJiZ7ZGVsYXk6Q3lwcmVzcy5lbnYoXCJkZWxheVwiKX0sLi4uQ3lwcmVzcy5lbnYoXCJkaWZmSW5jbHVkZUFudGlBbGlhc2luZ1wiKSYme2RpZmZJbmNsdWRlQW50aUFsaWFzaW5nOkN5cHJlc3MuZW52KFwiZGlmZkluY2x1ZGVBbnRpQWxpYXNpbmdcIil9LC4uLkN5cHJlc3MuZW52KFwiZGlmZlRocmVzaG9sZFwiKSYme2RpZmZUaHJlc2hvbGQ6Q3lwcmVzcy5lbnYoXCJkaWZmVGhyZXNob2xkXCIpfSwuLi5DeXByZXNzLmVudihcImZvcmNlZENvbG9yc1wiKSYme2ZvcmNlZENvbG9yczpDeXByZXNzLmVudihcImZvcmNlZENvbG9yc1wiKX0sLi4uQ3lwcmVzcy5lbnYoXCJwYXVzZUFuaW1hdGlvbkF0RW5kXCIpJiZ7cGF1c2VBbmltYXRpb25BdEVuZDpDeXByZXNzLmVudihcInBhdXNlQW5pbWF0aW9uQXRFbmRcIil9LC4uLkN5cHJlc3MuZW52KFwicHJlZmVyc1JlZHVjZWRNb3Rpb25cIikmJntwcmVmZXJzUmVkdWNlZE1vdGlvbjpDeXByZXNzLmVudihcInByZWZlcnNSZWR1Y2VkTW90aW9uXCIpfX0scGFnZVVybDpyfX0pO30pO30pO30pO30pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3V0LmpzLm1hcFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3VwcG9ydC5qcy5tYXAiLCJ2YXIgTm9kZVR5cGU7XHJcbihmdW5jdGlvbiAoTm9kZVR5cGUpIHtcclxuICAgIE5vZGVUeXBlW05vZGVUeXBlW1wiRG9jdW1lbnRcIl0gPSAwXSA9IFwiRG9jdW1lbnRcIjtcclxuICAgIE5vZGVUeXBlW05vZGVUeXBlW1wiRG9jdW1lbnRUeXBlXCJdID0gMV0gPSBcIkRvY3VtZW50VHlwZVwiO1xyXG4gICAgTm9kZVR5cGVbTm9kZVR5cGVbXCJFbGVtZW50XCJdID0gMl0gPSBcIkVsZW1lbnRcIjtcclxuICAgIE5vZGVUeXBlW05vZGVUeXBlW1wiVGV4dFwiXSA9IDNdID0gXCJUZXh0XCI7XHJcbiAgICBOb2RlVHlwZVtOb2RlVHlwZVtcIkNEQVRBXCJdID0gNF0gPSBcIkNEQVRBXCI7XHJcbiAgICBOb2RlVHlwZVtOb2RlVHlwZVtcIkNvbW1lbnRcIl0gPSA1XSA9IFwiQ29tbWVudFwiO1xyXG59KShOb2RlVHlwZSB8fCAoTm9kZVR5cGUgPSB7fSkpO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnQobikge1xyXG4gICAgcmV0dXJuIG4ubm9kZVR5cGUgPT09IG4uRUxFTUVOVF9OT0RFO1xyXG59XHJcbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChuKSB7XHJcbiAgICB2YXIgaG9zdCA9IG4gPT09IG51bGwgfHwgbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbi5ob3N0O1xyXG4gICAgcmV0dXJuIEJvb2xlYW4oKGhvc3QgPT09IG51bGwgfHwgaG9zdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaG9zdC5zaGFkb3dSb290KSA9PT0gbik7XHJcbn1cclxuZnVuY3Rpb24gaXNOYXRpdmVTaGFkb3dEb20oc2hhZG93Um9vdCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzaGFkb3dSb290KSA9PT0gJ1tvYmplY3QgU2hhZG93Um9vdF0nO1xyXG59XHJcbmZ1bmN0aW9uIGZpeEJyb3dzZXJDb21wYXRpYmlsaXR5SXNzdWVzSW5DU1MoY3NzVGV4dCkge1xyXG4gICAgaWYgKGNzc1RleHQuaW5jbHVkZXMoJyBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7JykgJiZcclxuICAgICAgICAhY3NzVGV4dC5pbmNsdWRlcygnIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OycpKSB7XHJcbiAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZSgnIGJhY2tncm91bmQtY2xpcDogdGV4dDsnLCAnIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7Jyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3NzVGV4dDtcclxufVxyXG5mdW5jdGlvbiBlc2NhcGVJbXBvcnRTdGF0ZW1lbnQocnVsZSkge1xyXG4gICAgdmFyIGNzc1RleHQgPSBydWxlLmNzc1RleHQ7XHJcbiAgICBpZiAoY3NzVGV4dC5zcGxpdCgnXCInKS5sZW5ndGggPCAzKVxyXG4gICAgICAgIHJldHVybiBjc3NUZXh0O1xyXG4gICAgdmFyIHN0YXRlbWVudCA9IFsnQGltcG9ydCcsIFwidXJsKFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShydWxlLmhyZWYpLCBcIilcIildO1xyXG4gICAgaWYgKHJ1bGUubGF5ZXJOYW1lID09PSAnJykge1xyXG4gICAgICAgIHN0YXRlbWVudC5wdXNoKFwibGF5ZXJcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChydWxlLmxheWVyTmFtZSkge1xyXG4gICAgICAgIHN0YXRlbWVudC5wdXNoKFwibGF5ZXIoXCIuY29uY2F0KHJ1bGUubGF5ZXJOYW1lLCBcIilcIikpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJ1bGUuc3VwcG9ydHNUZXh0KSB7XHJcbiAgICAgICAgc3RhdGVtZW50LnB1c2goXCJzdXBwb3J0cyhcIi5jb25jYXQocnVsZS5zdXBwb3J0c1RleHQsIFwiKVwiKSk7XHJcbiAgICB9XHJcbiAgICBpZiAocnVsZS5tZWRpYS5sZW5ndGgpIHtcclxuICAgICAgICBzdGF0ZW1lbnQucHVzaChydWxlLm1lZGlhLm1lZGlhVGV4dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdGVtZW50LmpvaW4oJyAnKSArICc7JztcclxufVxyXG5mdW5jdGlvbiBzdHJpbmdpZnlTdHlsZXNoZWV0KHMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIHJ1bGVzID0gcy5ydWxlcyB8fCBzLmNzc1J1bGVzO1xyXG4gICAgICAgIHJldHVybiBydWxlc1xyXG4gICAgICAgICAgICA/IGZpeEJyb3dzZXJDb21wYXRpYmlsaXR5SXNzdWVzSW5DU1MoQXJyYXkuZnJvbShydWxlcykubWFwKHN0cmluZ2lmeVJ1bGUpLmpvaW4oJycpKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzdHJpbmdpZnlSdWxlKHJ1bGUpIHtcclxuICAgIHZhciBpbXBvcnRTdHJpbmdpZmllZDtcclxuICAgIGlmIChpc0NTU0ltcG9ydFJ1bGUocnVsZSkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpbXBvcnRTdHJpbmdpZmllZCA9XHJcbiAgICAgICAgICAgICAgICBzdHJpbmdpZnlTdHlsZXNoZWV0KHJ1bGUuc3R5bGVTaGVldCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVJbXBvcnRTdGF0ZW1lbnQocnVsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWxpZGF0ZVN0cmluZ2lmaWVkQ3NzUnVsZShpbXBvcnRTdHJpbmdpZmllZCB8fCBydWxlLmNzc1RleHQpO1xyXG59XHJcbmZ1bmN0aW9uIHZhbGlkYXRlU3RyaW5naWZpZWRDc3NSdWxlKGNzc1N0cmluZ2lmaWVkKSB7XHJcbiAgICBpZiAoY3NzU3RyaW5naWZpZWQuaW5jbHVkZXMoJzonKSkge1xyXG4gICAgICAgIHZhciByZWdleCA9IC8oXFxbKD86W1xcdy1dKylbXlxcXFxdKSg6KD86W1xcdy1dKylcXF0pL2dtO1xyXG4gICAgICAgIHJldHVybiBjc3NTdHJpbmdpZmllZC5yZXBsYWNlKHJlZ2V4LCAnJDFcXFxcJDInKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjc3NTdHJpbmdpZmllZDtcclxufVxyXG5mdW5jdGlvbiBpc0NTU0ltcG9ydFJ1bGUocnVsZSkge1xyXG4gICAgcmV0dXJuICdzdHlsZVNoZWV0JyBpbiBydWxlO1xyXG59XHJcbnZhciBNaXJyb3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWlycm9yKCkge1xyXG4gICAgICAgIHRoaXMuaWROb2RlTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMubm9kZU1ldGFNYXAgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgfVxyXG4gICAgTWlycm9yLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGlmICghbilcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIHZhciBpZCA9IChfYSA9IHRoaXMuZ2V0TWV0YShuKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlkO1xyXG4gICAgICAgIHJldHVybiBpZCAhPT0gbnVsbCAmJiBpZCAhPT0gdm9pZCAwID8gaWQgOiAtMTtcclxuICAgIH07XHJcbiAgICBNaXJyb3IucHJvdG90eXBlLmdldE5vZGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZE5vZGVNYXAuZ2V0KGlkKSB8fCBudWxsO1xyXG4gICAgfTtcclxuICAgIE1pcnJvci5wcm90b3R5cGUuZ2V0SWRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuaWROb2RlTWFwLmtleXMoKSk7XHJcbiAgICB9O1xyXG4gICAgTWlycm9yLnByb3RvdHlwZS5nZXRNZXRhID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlTWV0YU1hcC5nZXQobikgfHwgbnVsbDtcclxuICAgIH07XHJcbiAgICBNaXJyb3IucHJvdG90eXBlLnJlbW92ZU5vZGVGcm9tTWFwID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXMuZ2V0SWQobik7XHJcbiAgICAgICAgdGhpcy5pZE5vZGVNYXBbXCJkZWxldGVcIl0oaWQpO1xyXG4gICAgICAgIGlmIChuLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgbi5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZU5vZGVGcm9tTWFwKGNoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBNaXJyb3IucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkTm9kZU1hcC5oYXMoaWQpO1xyXG4gICAgfTtcclxuICAgIE1pcnJvci5wcm90b3R5cGUuaGFzTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZU1ldGFNYXAuaGFzKG5vZGUpO1xyXG4gICAgfTtcclxuICAgIE1pcnJvci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG4sIG1ldGEpIHtcclxuICAgICAgICB2YXIgaWQgPSBtZXRhLmlkO1xyXG4gICAgICAgIHRoaXMuaWROb2RlTWFwLnNldChpZCwgbik7XHJcbiAgICAgICAgdGhpcy5ub2RlTWV0YU1hcC5zZXQobiwgbWV0YSk7XHJcbiAgICB9O1xyXG4gICAgTWlycm9yLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKGlkLCBuKSB7XHJcbiAgICAgICAgdmFyIG9sZE5vZGUgPSB0aGlzLmdldE5vZGUoaWQpO1xyXG4gICAgICAgIGlmIChvbGROb2RlKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRhID0gdGhpcy5ub2RlTWV0YU1hcC5nZXQob2xkTm9kZSk7XHJcbiAgICAgICAgICAgIGlmIChtZXRhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlTWV0YU1hcC5zZXQobiwgbWV0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWROb2RlTWFwLnNldChpZCwgbik7XHJcbiAgICB9O1xyXG4gICAgTWlycm9yLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlkTm9kZU1hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLm5vZGVNZXRhTWFwID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWlycm9yO1xyXG59KCkpO1xyXG5mdW5jdGlvbiBjcmVhdGVNaXJyb3IoKSB7XHJcbiAgICByZXR1cm4gbmV3IE1pcnJvcigpO1xyXG59XHJcbmZ1bmN0aW9uIG1hc2tJbnB1dFZhbHVlKF9hKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IF9hLmVsZW1lbnQsIG1hc2tJbnB1dE9wdGlvbnMgPSBfYS5tYXNrSW5wdXRPcHRpb25zLCB0YWdOYW1lID0gX2EudGFnTmFtZSwgdHlwZSA9IF9hLnR5cGUsIHZhbHVlID0gX2EudmFsdWUsIG1hc2tJbnB1dEZuID0gX2EubWFza0lucHV0Rm47XHJcbiAgICB2YXIgdGV4dCA9IHZhbHVlIHx8ICcnO1xyXG4gICAgdmFyIGFjdHVhbFR5cGUgPSB0eXBlICYmIHRvTG93ZXJDYXNlKHR5cGUpO1xyXG4gICAgaWYgKG1hc2tJbnB1dE9wdGlvbnNbdGFnTmFtZS50b0xvd2VyQ2FzZSgpXSB8fFxyXG4gICAgICAgIChhY3R1YWxUeXBlICYmIG1hc2tJbnB1dE9wdGlvbnNbYWN0dWFsVHlwZV0pKSB7XHJcbiAgICAgICAgaWYgKG1hc2tJbnB1dEZuKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBtYXNrSW5wdXRGbih0ZXh0LCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRleHQgPSAnKicucmVwZWF0KHRleHQubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dDtcclxufVxyXG5mdW5jdGlvbiB0b0xvd2VyQ2FzZShzdHIpIHtcclxuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcclxufVxyXG52YXIgT1JJR0lOQUxfQVRUUklCVVRFX05BTUUgPSAnX19ycndlYl9vcmlnaW5hbF9fJztcclxuZnVuY3Rpb24gaXMyRENhbnZhc0JsYW5rKGNhbnZhcykge1xyXG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKCFjdHgpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB2YXIgY2h1bmtTaXplID0gNTA7XHJcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGNhbnZhcy53aWR0aDsgeCArPSBjaHVua1NpemUpIHtcclxuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGNhbnZhcy5oZWlnaHQ7IHkgKz0gY2h1bmtTaXplKSB7XHJcbiAgICAgICAgICAgIHZhciBnZXRJbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhO1xyXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxHZXRJbWFnZURhdGEgPSBPUklHSU5BTF9BVFRSSUJVVEVfTkFNRSBpbiBnZXRJbWFnZURhdGFcclxuICAgICAgICAgICAgICAgID8gZ2V0SW1hZ2VEYXRhW09SSUdJTkFMX0FUVFJJQlVURV9OQU1FXVxyXG4gICAgICAgICAgICAgICAgOiBnZXRJbWFnZURhdGE7XHJcbiAgICAgICAgICAgIHZhciBwaXhlbEJ1ZmZlciA9IG5ldyBVaW50MzJBcnJheShvcmlnaW5hbEdldEltYWdlRGF0YS5jYWxsKGN0eCwgeCwgeSwgTWF0aC5taW4oY2h1bmtTaXplLCBjYW52YXMud2lkdGggLSB4KSwgTWF0aC5taW4oY2h1bmtTaXplLCBjYW52YXMuaGVpZ2h0IC0geSkpLmRhdGEuYnVmZmVyKTtcclxuICAgICAgICAgICAgaWYgKHBpeGVsQnVmZmVyLnNvbWUoZnVuY3Rpb24gKHBpeGVsKSB7IHJldHVybiBwaXhlbCAhPT0gMDsgfSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gaXNOb2RlTWV0YUVxdWFsKGEsIGIpIHtcclxuICAgIGlmICghYSB8fCAhYiB8fCBhLnR5cGUgIT09IGIudHlwZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoYS50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudClcclxuICAgICAgICByZXR1cm4gYS5jb21wYXRNb2RlID09PSBiLmNvbXBhdE1vZGU7XHJcbiAgICBlbHNlIGlmIChhLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50VHlwZSlcclxuICAgICAgICByZXR1cm4gKGEubmFtZSA9PT0gYi5uYW1lICYmXHJcbiAgICAgICAgICAgIGEucHVibGljSWQgPT09IGIucHVibGljSWQgJiZcclxuICAgICAgICAgICAgYS5zeXN0ZW1JZCA9PT0gYi5zeXN0ZW1JZCk7XHJcbiAgICBlbHNlIGlmIChhLnR5cGUgPT09IE5vZGVUeXBlLkNvbW1lbnQgfHxcclxuICAgICAgICBhLnR5cGUgPT09IE5vZGVUeXBlLlRleHQgfHxcclxuICAgICAgICBhLnR5cGUgPT09IE5vZGVUeXBlLkNEQVRBKVxyXG4gICAgICAgIHJldHVybiBhLnRleHRDb250ZW50ID09PSBiLnRleHRDb250ZW50O1xyXG4gICAgZWxzZSBpZiAoYS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KVxyXG4gICAgICAgIHJldHVybiAoYS50YWdOYW1lID09PSBiLnRhZ05hbWUgJiZcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoYS5hdHRyaWJ1dGVzKSA9PT1cclxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGIuYXR0cmlidXRlcykgJiZcclxuICAgICAgICAgICAgYS5pc1NWRyA9PT0gYi5pc1NWRyAmJlxyXG4gICAgICAgICAgICBhLm5lZWRCbG9jayA9PT0gYi5uZWVkQmxvY2spO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIGdldElucHV0VHlwZShlbGVtZW50KSB7XHJcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcclxuICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1yci1pcy1wYXNzd29yZCcpXHJcbiAgICAgICAgPyAncGFzc3dvcmQnXHJcbiAgICAgICAgOiB0eXBlXHJcbiAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIHRvTG93ZXJDYXNlKHR5cGUpXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxufVxuXG52YXIgX2lkID0gMTtcclxudmFyIHRhZ05hbWVSZWdleCA9IG5ldyBSZWdFeHAoJ1teYS16MC05LV86XScpO1xyXG52YXIgSUdOT1JFRF9OT0RFID0gLTI7XHJcbmZ1bmN0aW9uIGdlbklkKCkge1xyXG4gICAgcmV0dXJuIF9pZCsrO1xyXG59XHJcbmZ1bmN0aW9uIGdldFZhbGlkVGFnTmFtZShlbGVtZW50KSB7XHJcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiAnZm9ybSc7XHJcbiAgICB9XHJcbiAgICB2YXIgcHJvY2Vzc2VkVGFnTmFtZSA9IHRvTG93ZXJDYXNlKGVsZW1lbnQudGFnTmFtZSk7XHJcbiAgICBpZiAodGFnTmFtZVJlZ2V4LnRlc3QocHJvY2Vzc2VkVGFnTmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gJ2Rpdic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvY2Vzc2VkVGFnTmFtZTtcclxufVxyXG5mdW5jdGlvbiBleHRyYWN0T3JpZ2luKHVybCkge1xyXG4gICAgdmFyIG9yaWdpbiA9ICcnO1xyXG4gICAgaWYgKHVybC5pbmRleE9mKCcvLycpID4gLTEpIHtcclxuICAgICAgICBvcmlnaW4gPSB1cmwuc3BsaXQoJy8nKS5zbGljZSgwLCAzKS5qb2luKCcvJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBvcmlnaW4gPSB1cmwuc3BsaXQoJy8nKVswXTtcclxuICAgIH1cclxuICAgIG9yaWdpbiA9IG9yaWdpbi5zcGxpdCgnPycpWzBdO1xyXG4gICAgcmV0dXJuIG9yaWdpbjtcclxufVxyXG52YXIgY2FudmFzU2VydmljZTtcclxudmFyIGNhbnZhc0N0eDtcclxudmFyIFVSTF9JTl9DU1NfUkVGID0gL3VybFxcKCg/OignKShbXiddKiknfChcIikoLio/KVwifChbXildKikpXFwpL2dtO1xyXG52YXIgVVJMX1BST1RPQ09MX01BVENIID0gL14oPzpbYS16K10rOik/XFwvXFwvL2k7XHJcbnZhciBVUkxfV1dXX01BVENIID0gL153d3dcXC4uKi9pO1xyXG52YXIgREFUQV9VUkkgPSAvXihkYXRhOikoW14sXSopLCguKikvaTtcclxuZnVuY3Rpb24gYWJzb2x1dGVUb1N0eWxlc2hlZXQoY3NzVGV4dCwgaHJlZikge1xyXG4gICAgcmV0dXJuIChjc3NUZXh0IHx8ICcnKS5yZXBsYWNlKFVSTF9JTl9DU1NfUkVGLCBmdW5jdGlvbiAob3JpZ2luLCBxdW90ZTEsIHBhdGgxLCBxdW90ZTIsIHBhdGgyLCBwYXRoMykge1xyXG4gICAgICAgIHZhciBmaWxlUGF0aCA9IHBhdGgxIHx8IHBhdGgyIHx8IHBhdGgzO1xyXG4gICAgICAgIHZhciBtYXliZVF1b3RlID0gcXVvdGUxIHx8IHF1b3RlMiB8fCAnJztcclxuICAgICAgICBpZiAoIWZpbGVQYXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChVUkxfUFJPVE9DT0xfTUFUQ0gudGVzdChmaWxlUGF0aCkgfHwgVVJMX1dXV19NQVRDSC50ZXN0KGZpbGVQYXRoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ1cmwoXCIuY29uY2F0KG1heWJlUXVvdGUpLmNvbmNhdChmaWxlUGF0aCkuY29uY2F0KG1heWJlUXVvdGUsIFwiKVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKERBVEFfVVJJLnRlc3QoZmlsZVBhdGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInVybChcIi5jb25jYXQobWF5YmVRdW90ZSkuY29uY2F0KGZpbGVQYXRoKS5jb25jYXQobWF5YmVRdW90ZSwgXCIpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsZVBhdGhbMF0gPT09ICcvJykge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ1cmwoXCIuY29uY2F0KG1heWJlUXVvdGUpLmNvbmNhdChleHRyYWN0T3JpZ2luKGhyZWYpICsgZmlsZVBhdGgpLmNvbmNhdChtYXliZVF1b3RlLCBcIilcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdGFjayA9IGhyZWYuc3BsaXQoJy8nKTtcclxuICAgICAgICB2YXIgcGFydHMgPSBmaWxlUGF0aC5zcGxpdCgnLycpO1xyXG4gICAgICAgIHN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgcGFydHNfMSA9IHBhcnRzOyBfaSA8IHBhcnRzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydHNfMVtfaV07XHJcbiAgICAgICAgICAgIGlmIChwYXJ0ID09PSAnLicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcclxuICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChwYXJ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJ1cmwoXCIuY29uY2F0KG1heWJlUXVvdGUpLmNvbmNhdChzdGFjay5qb2luKCcvJykpLmNvbmNhdChtYXliZVF1b3RlLCBcIilcIik7XHJcbiAgICB9KTtcclxufVxyXG52YXIgU1JDU0VUX05PVF9TUEFDRVMgPSAvXlteIFxcdFxcblxcclxcdTAwMGNdKy87XHJcbnZhciBTUkNTRVRfQ09NTUFTX09SX1NQQUNFUyA9IC9eWywgXFx0XFxuXFxyXFx1MDAwY10rLztcclxuZnVuY3Rpb24gZ2V0QWJzb2x1dGVTcmNzZXRTdHJpbmcoZG9jLCBhdHRyaWJ1dGVWYWx1ZSkge1xyXG4gICAgaWYgKGF0dHJpYnV0ZVZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XHJcbiAgICB9XHJcbiAgICB2YXIgcG9zID0gMDtcclxuICAgIGZ1bmN0aW9uIGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ0V4KSB7XHJcbiAgICAgICAgdmFyIGNoYXJzO1xyXG4gICAgICAgIHZhciBtYXRjaCA9IHJlZ0V4LmV4ZWMoYXR0cmlidXRlVmFsdWUuc3Vic3RyaW5nKHBvcykpO1xyXG4gICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICBjaGFycyA9IG1hdGNoWzBdO1xyXG4gICAgICAgICAgICBwb3MgKz0gY2hhcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHZhciBvdXRwdXQgPSBbXTtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgY29sbGVjdENoYXJhY3RlcnMoU1JDU0VUX0NPTU1BU19PUl9TUEFDRVMpO1xyXG4gICAgICAgIGlmIChwb3MgPj0gYXR0cmlidXRlVmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXJsID0gY29sbGVjdENoYXJhY3RlcnMoU1JDU0VUX05PVF9TUEFDRVMpO1xyXG4gICAgICAgIGlmICh1cmwuc2xpY2UoLTEpID09PSAnLCcpIHtcclxuICAgICAgICAgICAgdXJsID0gYWJzb2x1dGVUb0RvYyhkb2MsIHVybC5zdWJzdHJpbmcoMCwgdXJsLmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2godXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yc1N0ciA9ICcnO1xyXG4gICAgICAgICAgICB1cmwgPSBhYnNvbHV0ZVRvRG9jKGRvYywgdXJsKTtcclxuICAgICAgICAgICAgdmFyIGluUGFyZW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGF0dHJpYnV0ZVZhbHVlLmNoYXJBdChwb3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGMgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goKHVybCArIGRlc2NyaXB0b3JzU3RyKS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWluUGFyZW5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT09ICcsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goKHVybCArIGRlc2NyaXB0b3JzU3RyKS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYyA9PT0gJygnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluUGFyZW5zID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gJyknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluUGFyZW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvcnNTdHIgKz0gYztcclxuICAgICAgICAgICAgICAgIHBvcyArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dC5qb2luKCcsICcpO1xyXG59XHJcbmZ1bmN0aW9uIGFic29sdXRlVG9Eb2MoZG9jLCBhdHRyaWJ1dGVWYWx1ZSkge1xyXG4gICAgaWYgKCFhdHRyaWJ1dGVWYWx1ZSB8fCBhdHRyaWJ1dGVWYWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xyXG4gICAgfVxyXG4gICAgdmFyIGEgPSBkb2MuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYS5ocmVmID0gYXR0cmlidXRlVmFsdWU7XHJcbiAgICByZXR1cm4gYS5ocmVmO1xyXG59XHJcbmZ1bmN0aW9uIGlzU1ZHRWxlbWVudChlbCkge1xyXG4gICAgcmV0dXJuIEJvb2xlYW4oZWwudGFnTmFtZSA9PT0gJ3N2ZycgfHwgZWwub3duZXJTVkdFbGVtZW50KTtcclxufVxyXG5mdW5jdGlvbiBnZXRIcmVmKCkge1xyXG4gICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhLmhyZWYgPSAnJztcclxuICAgIHJldHVybiBhLmhyZWY7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNmb3JtQXR0cmlidXRlKGRvYywgdGFnTmFtZSwgbmFtZSwgdmFsdWUpIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZiAobmFtZSA9PT0gJ3NyYycgfHxcclxuICAgICAgICAobmFtZSA9PT0gJ2hyZWYnICYmICEodGFnTmFtZSA9PT0gJ3VzZScgJiYgdmFsdWVbMF0gPT09ICcjJykpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFic29sdXRlVG9Eb2MoZG9jLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuYW1lID09PSAneGxpbms6aHJlZicgJiYgdmFsdWVbMF0gIT09ICcjJykge1xyXG4gICAgICAgIHJldHVybiBhYnNvbHV0ZVRvRG9jKGRvYywgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobmFtZSA9PT0gJ2JhY2tncm91bmQnICYmXHJcbiAgICAgICAgKHRhZ05hbWUgPT09ICd0YWJsZScgfHwgdGFnTmFtZSA9PT0gJ3RkJyB8fCB0YWdOYW1lID09PSAndGgnKSkge1xyXG4gICAgICAgIHJldHVybiBhYnNvbHV0ZVRvRG9jKGRvYywgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobmFtZSA9PT0gJ3NyY3NldCcpIHtcclxuICAgICAgICByZXR1cm4gZ2V0QWJzb2x1dGVTcmNzZXRTdHJpbmcoZG9jLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuYW1lID09PSAnc3R5bGUnKSB7XHJcbiAgICAgICAgcmV0dXJuIGFic29sdXRlVG9TdHlsZXNoZWV0KHZhbHVlLCBnZXRIcmVmKCkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGFnTmFtZSA9PT0gJ29iamVjdCcgJiYgbmFtZSA9PT0gJ2RhdGEnKSB7XHJcbiAgICAgICAgcmV0dXJuIGFic29sdXRlVG9Eb2MoZG9jLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuZnVuY3Rpb24gaWdub3JlQXR0cmlidXRlKHRhZ05hbWUsIG5hbWUsIF92YWx1ZSkge1xyXG4gICAgcmV0dXJuICh0YWdOYW1lID09PSAndmlkZW8nIHx8IHRhZ05hbWUgPT09ICdhdWRpbycpICYmIG5hbWUgPT09ICdhdXRvcGxheSc7XHJcbn1cclxuZnVuY3Rpb24gX2lzQmxvY2tlZEVsZW1lbnQoZWxlbWVudCwgYmxvY2tDbGFzcywgYmxvY2tTZWxlY3Rvcikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAodHlwZW9mIGJsb2NrQ2xhc3MgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhibG9ja0NsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGVJbmRleCA9IGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aDsgZUluZGV4LS07KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc0xpc3RbZUluZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChibG9ja0NsYXNzLnRlc3QoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChibG9ja1NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm1hdGNoZXMoYmxvY2tTZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBjbGFzc01hdGNoZXNSZWdleChub2RlLCByZWdleCwgY2hlY2tBbmNlc3RvcnMpIHtcclxuICAgIGlmICghbm9kZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gbm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICBpZiAoIWNoZWNrQW5jZXN0b3JzKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzTWF0Y2hlc1JlZ2V4KG5vZGUucGFyZW50Tm9kZSwgcmVnZXgsIGNoZWNrQW5jZXN0b3JzKTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIGVJbmRleCA9IG5vZGUuY2xhc3NMaXN0Lmxlbmd0aDsgZUluZGV4LS07KSB7XHJcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IG5vZGUuY2xhc3NMaXN0W2VJbmRleF07XHJcbiAgICAgICAgaWYgKHJlZ2V4LnRlc3QoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWNoZWNrQW5jZXN0b3JzKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiBjbGFzc01hdGNoZXNSZWdleChub2RlLnBhcmVudE5vZGUsIHJlZ2V4LCBjaGVja0FuY2VzdG9ycyk7XHJcbn1cclxuZnVuY3Rpb24gbmVlZE1hc2tpbmdUZXh0KG5vZGUsIG1hc2tUZXh0Q2xhc3MsIG1hc2tUZXh0U2VsZWN0b3IpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIGVsID0gbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTEVNRU5UX05PREVcclxuICAgICAgICAgICAgPyBub2RlXHJcbiAgICAgICAgICAgIDogbm9kZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGlmIChlbCA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbWFza1RleHRDbGFzcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhtYXNrVGV4dENsYXNzKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoZWwuY2xvc2VzdChcIi5cIi5jb25jYXQobWFza1RleHRDbGFzcykpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY2xhc3NNYXRjaGVzUmVnZXgoZWwsIG1hc2tUZXh0Q2xhc3MsIHRydWUpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXNrVGV4dFNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlbC5tYXRjaGVzKG1hc2tUZXh0U2VsZWN0b3IpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGlmIChlbC5jbG9zZXN0KG1hc2tUZXh0U2VsZWN0b3IpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBvbmNlSWZyYW1lTG9hZGVkKGlmcmFtZUVsLCBsaXN0ZW5lciwgaWZyYW1lTG9hZFRpbWVvdXQpIHtcclxuICAgIHZhciB3aW4gPSBpZnJhbWVFbC5jb250ZW50V2luZG93O1xyXG4gICAgaWYgKCF3aW4pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgZmlyZWQgPSBmYWxzZTtcclxuICAgIHZhciByZWFkeVN0YXRlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZWFkeVN0YXRlID0gd2luLmRvY3VtZW50LnJlYWR5U3RhdGU7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgIHZhciB0aW1lcl8xID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghZmlyZWQpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgICAgICBmaXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBpZnJhbWVMb2FkVGltZW91dCk7XHJcbiAgICAgICAgaWZyYW1lRWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyXzEpO1xyXG4gICAgICAgICAgICBmaXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGJsYW5rVXJsID0gJ2Fib3V0OmJsYW5rJztcclxuICAgIGlmICh3aW4ubG9jYXRpb24uaHJlZiAhPT0gYmxhbmtVcmwgfHxcclxuICAgICAgICBpZnJhbWVFbC5zcmMgPT09IGJsYW5rVXJsIHx8XHJcbiAgICAgICAgaWZyYW1lRWwuc3JjID09PSAnJykge1xyXG4gICAgICAgIHNldFRpbWVvdXQobGlzdGVuZXIsIDApO1xyXG4gICAgICAgIHJldHVybiBpZnJhbWVFbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgbGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgaWZyYW1lRWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxpc3RlbmVyKTtcclxufVxyXG5mdW5jdGlvbiBvbmNlU3R5bGVzaGVldExvYWRlZChsaW5rLCBsaXN0ZW5lciwgc3R5bGVTaGVldExvYWRUaW1lb3V0KSB7XHJcbiAgICB2YXIgZmlyZWQgPSBmYWxzZTtcclxuICAgIHZhciBzdHlsZVNoZWV0TG9hZGVkO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdHlsZVNoZWV0TG9hZGVkID0gbGluay5zaGVldDtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChzdHlsZVNoZWV0TG9hZGVkKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghZmlyZWQpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgZmlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHN0eWxlU2hlZXRMb2FkVGltZW91dCk7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICBmaXJlZCA9IHRydWU7XHJcbiAgICAgICAgbGlzdGVuZXIoKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGUobiwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRvYyA9IG9wdGlvbnMuZG9jLCBtaXJyb3IgPSBvcHRpb25zLm1pcnJvciwgYmxvY2tDbGFzcyA9IG9wdGlvbnMuYmxvY2tDbGFzcywgYmxvY2tTZWxlY3RvciA9IG9wdGlvbnMuYmxvY2tTZWxlY3RvciwgbWFza1RleHRDbGFzcyA9IG9wdGlvbnMubWFza1RleHRDbGFzcywgbWFza1RleHRTZWxlY3RvciA9IG9wdGlvbnMubWFza1RleHRTZWxlY3RvciwgaW5saW5lU3R5bGVzaGVldCA9IG9wdGlvbnMuaW5saW5lU3R5bGVzaGVldCwgX2EgPSBvcHRpb25zLm1hc2tJbnB1dE9wdGlvbnMsIG1hc2tJbnB1dE9wdGlvbnMgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgbWFza1RleHRGbiA9IG9wdGlvbnMubWFza1RleHRGbiwgbWFza0lucHV0Rm4gPSBvcHRpb25zLm1hc2tJbnB1dEZuLCBfYiA9IG9wdGlvbnMuZGF0YVVSTE9wdGlvbnMsIGRhdGFVUkxPcHRpb25zID0gX2IgPT09IHZvaWQgMCA/IHt9IDogX2IsIGlubGluZUltYWdlcyA9IG9wdGlvbnMuaW5saW5lSW1hZ2VzLCByZWNvcmRDYW52YXMgPSBvcHRpb25zLnJlY29yZENhbnZhcywga2VlcElmcmFtZVNyY0ZuID0gb3B0aW9ucy5rZWVwSWZyYW1lU3JjRm4sIF9jID0gb3B0aW9ucy5uZXdseUFkZGVkRWxlbWVudCwgbmV3bHlBZGRlZEVsZW1lbnQgPSBfYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYztcclxuICAgIHZhciByb290SWQgPSBnZXRSb290SWQoZG9jLCBtaXJyb3IpO1xyXG4gICAgc3dpdGNoIChuLm5vZGVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBuLkRPQ1VNRU5UX05PREU6XHJcbiAgICAgICAgICAgIGlmIChuLmNvbXBhdE1vZGUgIT09ICdDU1MxQ29tcGF0Jykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5Eb2N1bWVudCxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wYXRNb2RlOiBuLmNvbXBhdE1vZGVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE5vZGVUeXBlLkRvY3VtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXM6IFtdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBuLkRPQ1VNRU5UX1RZUEVfTk9ERTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE5vZGVUeXBlLkRvY3VtZW50VHlwZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IG4ubmFtZSxcclxuICAgICAgICAgICAgICAgIHB1YmxpY0lkOiBuLnB1YmxpY0lkLFxyXG4gICAgICAgICAgICAgICAgc3lzdGVtSWQ6IG4uc3lzdGVtSWQsXHJcbiAgICAgICAgICAgICAgICByb290SWQ6IHJvb3RJZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2Ugbi5FTEVNRU5UX05PREU6XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVFbGVtZW50Tm9kZShuLCB7XHJcbiAgICAgICAgICAgICAgICBkb2M6IGRvYyxcclxuICAgICAgICAgICAgICAgIGJsb2NrQ2xhc3M6IGJsb2NrQ2xhc3MsXHJcbiAgICAgICAgICAgICAgICBibG9ja1NlbGVjdG9yOiBibG9ja1NlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgaW5saW5lU3R5bGVzaGVldDogaW5saW5lU3R5bGVzaGVldCxcclxuICAgICAgICAgICAgICAgIG1hc2tJbnB1dE9wdGlvbnM6IG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBtYXNrSW5wdXRGbjogbWFza0lucHV0Rm4sXHJcbiAgICAgICAgICAgICAgICBkYXRhVVJMT3B0aW9uczogZGF0YVVSTE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBpbmxpbmVJbWFnZXM6IGlubGluZUltYWdlcyxcclxuICAgICAgICAgICAgICAgIHJlY29yZENhbnZhczogcmVjb3JkQ2FudmFzLFxyXG4gICAgICAgICAgICAgICAga2VlcElmcmFtZVNyY0ZuOiBrZWVwSWZyYW1lU3JjRm4sXHJcbiAgICAgICAgICAgICAgICBuZXdseUFkZGVkRWxlbWVudDogbmV3bHlBZGRlZEVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICByb290SWQ6IHJvb3RJZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIG4uVEVYVF9OT0RFOlxyXG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplVGV4dE5vZGUobiwge1xyXG4gICAgICAgICAgICAgICAgbWFza1RleHRDbGFzczogbWFza1RleHRDbGFzcyxcclxuICAgICAgICAgICAgICAgIG1hc2tUZXh0U2VsZWN0b3I6IG1hc2tUZXh0U2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICBtYXNrVGV4dEZuOiBtYXNrVGV4dEZuLFxyXG4gICAgICAgICAgICAgICAgcm9vdElkOiByb290SWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBuLkNEQVRBX1NFQ1RJT05fTk9ERTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE5vZGVUeXBlLkNEQVRBLFxyXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgcm9vdElkOiByb290SWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIG4uQ09NTUVOVF9OT0RFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTm9kZVR5cGUuQ29tbWVudCxcclxuICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBuLnRleHRDb250ZW50IHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgcm9vdElkOiByb290SWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0Um9vdElkKGRvYywgbWlycm9yKSB7XHJcbiAgICBpZiAoIW1pcnJvci5oYXNOb2RlKGRvYykpXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHZhciBkb2NJZCA9IG1pcnJvci5nZXRJZChkb2MpO1xyXG4gICAgcmV0dXJuIGRvY0lkID09PSAxID8gdW5kZWZpbmVkIDogZG9jSWQ7XHJcbn1cclxuZnVuY3Rpb24gc2VyaWFsaXplVGV4dE5vZGUobiwgb3B0aW9ucykge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgdmFyIG1hc2tUZXh0Q2xhc3MgPSBvcHRpb25zLm1hc2tUZXh0Q2xhc3MsIG1hc2tUZXh0U2VsZWN0b3IgPSBvcHRpb25zLm1hc2tUZXh0U2VsZWN0b3IsIG1hc2tUZXh0Rm4gPSBvcHRpb25zLm1hc2tUZXh0Rm4sIHJvb3RJZCA9IG9wdGlvbnMucm9vdElkO1xyXG4gICAgdmFyIHBhcmVudFRhZ05hbWUgPSBuLnBhcmVudE5vZGUgJiYgbi5wYXJlbnROb2RlLnRhZ05hbWU7XHJcbiAgICB2YXIgdGV4dENvbnRlbnQgPSBuLnRleHRDb250ZW50O1xyXG4gICAgdmFyIGlzU3R5bGUgPSBwYXJlbnRUYWdOYW1lID09PSAnU1RZTEUnID8gdHJ1ZSA6IHVuZGVmaW5lZDtcclxuICAgIHZhciBpc1NjcmlwdCA9IHBhcmVudFRhZ05hbWUgPT09ICdTQ1JJUFQnID8gdHJ1ZSA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChpc1N0eWxlICYmIHRleHRDb250ZW50KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKG4ubmV4dFNpYmxpbmcgfHwgbi5wcmV2aW91c1NpYmxpbmcpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgoX2EgPSBuLnBhcmVudE5vZGUuc2hlZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jc3NSdWxlcykge1xyXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQgPSBzdHJpbmdpZnlTdHlsZXNoZWV0KG4ucGFyZW50Tm9kZS5zaGVldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW5ub3QgZ2V0IENTUyBzdHlsZXMgZnJvbSB0ZXh0J3MgcGFyZW50Tm9kZS4gRXJyb3I6IFwiLmNvbmNhdChlcnIpLCBuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dENvbnRlbnQgPSBhYnNvbHV0ZVRvU3R5bGVzaGVldCh0ZXh0Q29udGVudCwgZ2V0SHJlZigpKTtcclxuICAgIH1cclxuICAgIGlmIChpc1NjcmlwdCkge1xyXG4gICAgICAgIHRleHRDb250ZW50ID0gJ1NDUklQVF9QTEFDRUhPTERFUic7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzU3R5bGUgJiZcclxuICAgICAgICAhaXNTY3JpcHQgJiZcclxuICAgICAgICB0ZXh0Q29udGVudCAmJlxyXG4gICAgICAgIG5lZWRNYXNraW5nVGV4dChuLCBtYXNrVGV4dENsYXNzLCBtYXNrVGV4dFNlbGVjdG9yKSkge1xyXG4gICAgICAgIHRleHRDb250ZW50ID0gbWFza1RleHRGblxyXG4gICAgICAgICAgICA/IG1hc2tUZXh0Rm4odGV4dENvbnRlbnQpXHJcbiAgICAgICAgICAgIDogdGV4dENvbnRlbnQucmVwbGFjZSgvW1xcU10vZywgJyonKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTm9kZVR5cGUuVGV4dCxcclxuICAgICAgICB0ZXh0Q29udGVudDogdGV4dENvbnRlbnQgfHwgJycsXHJcbiAgICAgICAgaXNTdHlsZTogaXNTdHlsZSxcclxuICAgICAgICByb290SWQ6IHJvb3RJZFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVFbGVtZW50Tm9kZShuLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZG9jID0gb3B0aW9ucy5kb2MsIGJsb2NrQ2xhc3MgPSBvcHRpb25zLmJsb2NrQ2xhc3MsIGJsb2NrU2VsZWN0b3IgPSBvcHRpb25zLmJsb2NrU2VsZWN0b3IsIGlubGluZVN0eWxlc2hlZXQgPSBvcHRpb25zLmlubGluZVN0eWxlc2hlZXQsIF9hID0gb3B0aW9ucy5tYXNrSW5wdXRPcHRpb25zLCBtYXNrSW5wdXRPcHRpb25zID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIG1hc2tJbnB1dEZuID0gb3B0aW9ucy5tYXNrSW5wdXRGbiwgX2IgPSBvcHRpb25zLmRhdGFVUkxPcHRpb25zLCBkYXRhVVJMT3B0aW9ucyA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iLCBpbmxpbmVJbWFnZXMgPSBvcHRpb25zLmlubGluZUltYWdlcywgcmVjb3JkQ2FudmFzID0gb3B0aW9ucy5yZWNvcmRDYW52YXMsIGtlZXBJZnJhbWVTcmNGbiA9IG9wdGlvbnMua2VlcElmcmFtZVNyY0ZuLCBfYyA9IG9wdGlvbnMubmV3bHlBZGRlZEVsZW1lbnQsIG5ld2x5QWRkZWRFbGVtZW50ID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIHJvb3RJZCA9IG9wdGlvbnMucm9vdElkO1xyXG4gICAgdmFyIG5lZWRCbG9jayA9IF9pc0Jsb2NrZWRFbGVtZW50KG4sIGJsb2NrQ2xhc3MsIGJsb2NrU2VsZWN0b3IpO1xyXG4gICAgdmFyIHRhZ05hbWUgPSBnZXRWYWxpZFRhZ05hbWUobik7XHJcbiAgICB2YXIgYXR0cmlidXRlcyA9IHt9O1xyXG4gICAgdmFyIGxlbiA9IG4uYXR0cmlidXRlcy5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGF0dHIgPSBuLmF0dHJpYnV0ZXNbaV07XHJcbiAgICAgICAgaWYgKCFpZ25vcmVBdHRyaWJ1dGUodGFnTmFtZSwgYXR0ci5uYW1lLCBhdHRyLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzW2F0dHIubmFtZV0gPSB0cmFuc2Zvcm1BdHRyaWJ1dGUoZG9jLCB0YWdOYW1lLCB0b0xvd2VyQ2FzZShhdHRyLm5hbWUpLCBhdHRyLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2xpbmsnICYmIGlubGluZVN0eWxlc2hlZXQpIHtcclxuICAgICAgICB2YXIgc3R5bGVzaGVldCA9IEFycmF5LmZyb20oZG9jLnN0eWxlU2hlZXRzKS5maW5kKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzLmhyZWYgPT09IG4uaHJlZjtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgY3NzVGV4dCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN0eWxlc2hlZXQpIHtcclxuICAgICAgICAgICAgY3NzVGV4dCA9IHN0cmluZ2lmeVN0eWxlc2hlZXQoc3R5bGVzaGVldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjc3NUZXh0KSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLnJlbDtcclxuICAgICAgICAgICAgZGVsZXRlIGF0dHJpYnV0ZXMuaHJlZjtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5fY3NzVGV4dCA9IGFic29sdXRlVG9TdHlsZXNoZWV0KGNzc1RleHQsIHN0eWxlc2hlZXQuaHJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdzdHlsZScgJiZcclxuICAgICAgICBuLnNoZWV0ICYmXHJcbiAgICAgICAgIShuLmlubmVyVGV4dCB8fCBuLnRleHRDb250ZW50IHx8ICcnKS50cmltKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNzc1RleHQgPSBzdHJpbmdpZnlTdHlsZXNoZWV0KG4uc2hlZXQpO1xyXG4gICAgICAgIGlmIChjc3NUZXh0KSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuX2Nzc1RleHQgPSBhYnNvbHV0ZVRvU3R5bGVzaGVldChjc3NUZXh0LCBnZXRIcmVmKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnIHx8IHRhZ05hbWUgPT09ICd0ZXh0YXJlYScgfHwgdGFnTmFtZSA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBuLnZhbHVlO1xyXG4gICAgICAgIHZhciBjaGVja2VkID0gbi5jaGVja2VkO1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLnR5cGUgIT09ICdyYWRpbycgJiZcclxuICAgICAgICAgICAgYXR0cmlidXRlcy50eXBlICE9PSAnY2hlY2tib3gnICYmXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMudHlwZSAhPT0gJ3N1Ym1pdCcgJiZcclxuICAgICAgICAgICAgYXR0cmlidXRlcy50eXBlICE9PSAnYnV0dG9uJyAmJlxyXG4gICAgICAgICAgICB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgdHlwZSA9IGdldElucHV0VHlwZShuKTtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy52YWx1ZSA9IG1hc2tJbnB1dFZhbHVlKHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IG4sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgdGFnTmFtZTogdGFnTmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIG1hc2tJbnB1dE9wdGlvbnM6IG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBtYXNrSW5wdXRGbjogbWFza0lucHV0Rm5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ29wdGlvbicpIHtcclxuICAgICAgICBpZiAobi5zZWxlY3RlZCAmJiAhbWFza0lucHV0T3B0aW9uc1snc2VsZWN0J10pIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGUgYXR0cmlidXRlcy5zZWxlY3RlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2NhbnZhcycgJiYgcmVjb3JkQ2FudmFzKSB7XHJcbiAgICAgICAgaWYgKG4uX19jb250ZXh0ID09PSAnMmQnKSB7XHJcbiAgICAgICAgICAgIGlmICghaXMyRENhbnZhc0JsYW5rKG4pKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX2RhdGFVUkwgPSBuLnRvRGF0YVVSTChkYXRhVVJMT3B0aW9ucy50eXBlLCBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghKCdfX2NvbnRleHQnIGluIG4pKSB7XHJcbiAgICAgICAgICAgIHZhciBjYW52YXNEYXRhVVJMID0gbi50b0RhdGFVUkwoZGF0YVVSTE9wdGlvbnMudHlwZSwgZGF0YVVSTE9wdGlvbnMucXVhbGl0eSk7XHJcbiAgICAgICAgICAgIHZhciBibGFua0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICBibGFua0NhbnZhcy53aWR0aCA9IG4ud2lkdGg7XHJcbiAgICAgICAgICAgIGJsYW5rQ2FudmFzLmhlaWdodCA9IG4uaGVpZ2h0O1xyXG4gICAgICAgICAgICB2YXIgYmxhbmtDYW52YXNEYXRhVVJMID0gYmxhbmtDYW52YXMudG9EYXRhVVJMKGRhdGFVUkxPcHRpb25zLnR5cGUsIGRhdGFVUkxPcHRpb25zLnF1YWxpdHkpO1xyXG4gICAgICAgICAgICBpZiAoY2FudmFzRGF0YVVSTCAhPT0gYmxhbmtDYW52YXNEYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX2RhdGFVUkwgPSBjYW52YXNEYXRhVVJMO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpbWcnICYmIGlubGluZUltYWdlcykge1xyXG4gICAgICAgIGlmICghY2FudmFzU2VydmljZSkge1xyXG4gICAgICAgICAgICBjYW52YXNTZXJ2aWNlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICBjYW52YXNDdHggPSBjYW52YXNTZXJ2aWNlLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbWFnZV8xID0gbjtcclxuICAgICAgICB2YXIgb2xkVmFsdWVfMSA9IGltYWdlXzEuY3Jvc3NPcmlnaW47XHJcbiAgICAgICAgaW1hZ2VfMS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xyXG4gICAgICAgIHZhciByZWNvcmRJbmxpbmVJbWFnZV8xID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbWFnZV8xLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZWNvcmRJbmxpbmVJbWFnZV8xKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNhbnZhc1NlcnZpY2Uud2lkdGggPSBpbWFnZV8xLm5hdHVyYWxXaWR0aDtcclxuICAgICAgICAgICAgICAgIGNhbnZhc1NlcnZpY2UuaGVpZ2h0ID0gaW1hZ2VfMS5uYXR1cmFsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY2FudmFzQ3R4LmRyYXdJbWFnZShpbWFnZV8xLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucnJfZGF0YVVSTCA9IGNhbnZhc1NlcnZpY2UudG9EYXRhVVJMKGRhdGFVUkxPcHRpb25zLnR5cGUsIGRhdGFVUkxPcHRpb25zLnF1YWxpdHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCBpbmxpbmUgaW1nIHNyYz1cIi5jb25jYXQoaW1hZ2VfMS5jdXJyZW50U3JjLCBcIiEgRXJyb3I6IFwiKS5jb25jYXQoZXJyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2xkVmFsdWVfMVxyXG4gICAgICAgICAgICAgICAgPyAoYXR0cmlidXRlcy5jcm9zc09yaWdpbiA9IG9sZFZhbHVlXzEpXHJcbiAgICAgICAgICAgICAgICA6IGltYWdlXzEucmVtb3ZlQXR0cmlidXRlKCdjcm9zc29yaWdpbicpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGltYWdlXzEuY29tcGxldGUgJiYgaW1hZ2VfMS5uYXR1cmFsV2lkdGggIT09IDApXHJcbiAgICAgICAgICAgIHJlY29yZElubGluZUltYWdlXzEoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGltYWdlXzEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlY29yZElubGluZUltYWdlXzEpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdhdWRpbycgfHwgdGFnTmFtZSA9PT0gJ3ZpZGVvJykge1xyXG4gICAgICAgIGF0dHJpYnV0ZXMucnJfbWVkaWFTdGF0ZSA9IG4ucGF1c2VkXHJcbiAgICAgICAgICAgID8gJ3BhdXNlZCdcclxuICAgICAgICAgICAgOiAncGxheWVkJztcclxuICAgICAgICBhdHRyaWJ1dGVzLnJyX21lZGlhQ3VycmVudFRpbWUgPSBuLmN1cnJlbnRUaW1lO1xyXG4gICAgfVxyXG4gICAgaWYgKCFuZXdseUFkZGVkRWxlbWVudCkge1xyXG4gICAgICAgIGlmIChuLnNjcm9sbExlZnQpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5ycl9zY3JvbGxMZWZ0ID0gbi5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobi5zY3JvbGxUb3ApIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5ycl9zY3JvbGxUb3AgPSBuLnNjcm9sbFRvcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobmVlZEJsb2NrKSB7XHJcbiAgICAgICAgdmFyIF9kID0gbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgd2lkdGggPSBfZC53aWR0aCwgaGVpZ2h0ID0gX2QuaGVpZ2h0O1xyXG4gICAgICAgIGF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgICAgICAgIFwiY2xhc3NcIjogYXR0cmlidXRlc1tcImNsYXNzXCJdLFxyXG4gICAgICAgICAgICBycl93aWR0aDogXCJcIi5jb25jYXQod2lkdGgsIFwicHhcIiksXHJcbiAgICAgICAgICAgIHJyX2hlaWdodDogXCJcIi5jb25jYXQoaGVpZ2h0LCBcInB4XCIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICh0YWdOYW1lID09PSAnaWZyYW1lJyAmJiAha2VlcElmcmFtZVNyY0ZuKGF0dHJpYnV0ZXMuc3JjKSkge1xyXG4gICAgICAgIGlmICghbi5jb250ZW50RG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5ycl9zcmMgPSBhdHRyaWJ1dGVzLnNyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIGF0dHJpYnV0ZXMuc3JjO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBOb2RlVHlwZS5FbGVtZW50LFxyXG4gICAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXHJcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcclxuICAgICAgICBjaGlsZE5vZGVzOiBbXSxcclxuICAgICAgICBpc1NWRzogaXNTVkdFbGVtZW50KG4pIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICBuZWVkQmxvY2s6IG5lZWRCbG9jayxcclxuICAgICAgICByb290SWQ6IHJvb3RJZFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBsb3dlcklmRXhpc3RzKG1heWJlQXR0cikge1xyXG4gICAgaWYgKG1heWJlQXR0ciA9PT0gdW5kZWZpbmVkIHx8IG1heWJlQXR0ciA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBtYXliZUF0dHIudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzbGltRE9NRXhjbHVkZWQoc24sIHNsaW1ET01PcHRpb25zKSB7XHJcbiAgICBpZiAoc2xpbURPTU9wdGlvbnMuY29tbWVudCAmJiBzbi50eXBlID09PSBOb2RlVHlwZS5Db21tZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzbi50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHNsaW1ET01PcHRpb25zLnNjcmlwdCAmJlxyXG4gICAgICAgICAgICAoc24udGFnTmFtZSA9PT0gJ3NjcmlwdCcgfHxcclxuICAgICAgICAgICAgICAgIChzbi50YWdOYW1lID09PSAnbGluaycgJiZcclxuICAgICAgICAgICAgICAgICAgICAoc24uYXR0cmlidXRlcy5yZWwgPT09ICdwcmVsb2FkJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbi5hdHRyaWJ1dGVzLnJlbCA9PT0gJ21vZHVsZXByZWxvYWQnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNuLmF0dHJpYnV0ZXMuYXMgPT09ICdzY3JpcHQnKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNuLnRhZ05hbWUgPT09ICdsaW5rJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNuLmF0dHJpYnV0ZXMucmVsID09PSAncHJlZmV0Y2gnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHNuLmF0dHJpYnV0ZXMuaHJlZiA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgICAgICAgICAgICAgICBzbi5hdHRyaWJ1dGVzLmhyZWYuZW5kc1dpdGgoJy5qcycpKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRGYXZpY29uICYmXHJcbiAgICAgICAgICAgICgoc24udGFnTmFtZSA9PT0gJ2xpbmsnICYmIHNuLmF0dHJpYnV0ZXMucmVsID09PSAnc2hvcnRjdXQgaWNvbicpIHx8XHJcbiAgICAgICAgICAgICAgICAoc24udGFnTmFtZSA9PT0gJ21ldGEnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKS5tYXRjaCgvXm1zYXBwbGljYXRpb24tdGlsZShpbWFnZXxjb2xvcikkLykgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnYXBwbGljYXRpb24tbmFtZScgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnJlbCkgPT09ICdpY29uJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucmVsKSA9PT0gJ2FwcGxlLXRvdWNoLWljb24nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5yZWwpID09PSAnc2hvcnRjdXQgaWNvbicpKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNuLnRhZ05hbWUgPT09ICdtZXRhJykge1xyXG4gICAgICAgICAgICBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFEZXNjS2V5d29yZHMgJiZcclxuICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKS5tYXRjaCgvXmRlc2NyaXB0aW9ufGtleXdvcmRzJC8pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YVNvY2lhbCAmJlxyXG4gICAgICAgICAgICAgICAgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5wcm9wZXJ0eSkubWF0Y2goL14ob2d8dHdpdHRlcnxmYik6LykgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkubWF0Y2goL14ob2d8dHdpdHRlcik6LykgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdwaW50ZXJlc3QnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFSb2JvdHMgJiZcclxuICAgICAgICAgICAgICAgIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdyb2JvdHMnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnZ29vZ2xlYm90JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2Jpbmdib3QnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFIdHRwRXF1aXYgJiZcclxuICAgICAgICAgICAgICAgIHNuLmF0dHJpYnV0ZXNbJ2h0dHAtZXF1aXYnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YUF1dGhvcnNoaXAgJiZcclxuICAgICAgICAgICAgICAgIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdhdXRob3InIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnZ2VuZXJhdG9yJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2ZyYW1ld29yaycgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdwdWJsaXNoZXInIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAncHJvZ2lkJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5wcm9wZXJ0eSkubWF0Y2goL15hcnRpY2xlOi8pIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnByb3BlcnR5KS5tYXRjaCgvXnByb2R1Y3Q6LykpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YVZlcmlmaWNhdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2dvb2dsZS1zaXRlLXZlcmlmaWNhdGlvbicgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICd5YW5kZXgtdmVyaWZpY2F0aW9uJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2NzcmYtdG9rZW4nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAncDpkb21haW5fdmVyaWZ5JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ3ZlcmlmeS12MScgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICd2ZXJpZmljYXRpb24nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnc2hvcGlmeS1jaGVja291dC1hcGktdG9rZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gc2VyaWFsaXplTm9kZVdpdGhJZChuLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZG9jID0gb3B0aW9ucy5kb2MsIG1pcnJvciA9IG9wdGlvbnMubWlycm9yLCBibG9ja0NsYXNzID0gb3B0aW9ucy5ibG9ja0NsYXNzLCBibG9ja1NlbGVjdG9yID0gb3B0aW9ucy5ibG9ja1NlbGVjdG9yLCBtYXNrVGV4dENsYXNzID0gb3B0aW9ucy5tYXNrVGV4dENsYXNzLCBtYXNrVGV4dFNlbGVjdG9yID0gb3B0aW9ucy5tYXNrVGV4dFNlbGVjdG9yLCBfYSA9IG9wdGlvbnMuc2tpcENoaWxkLCBza2lwQ2hpbGQgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLmlubGluZVN0eWxlc2hlZXQsIGlubGluZVN0eWxlc2hlZXQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMubWFza0lucHV0T3B0aW9ucywgbWFza0lucHV0T3B0aW9ucyA9IF9jID09PSB2b2lkIDAgPyB7fSA6IF9jLCBtYXNrVGV4dEZuID0gb3B0aW9ucy5tYXNrVGV4dEZuLCBtYXNrSW5wdXRGbiA9IG9wdGlvbnMubWFza0lucHV0Rm4sIHNsaW1ET01PcHRpb25zID0gb3B0aW9ucy5zbGltRE9NT3B0aW9ucywgX2QgPSBvcHRpb25zLmRhdGFVUkxPcHRpb25zLCBkYXRhVVJMT3B0aW9ucyA9IF9kID09PSB2b2lkIDAgPyB7fSA6IF9kLCBfZSA9IG9wdGlvbnMuaW5saW5lSW1hZ2VzLCBpbmxpbmVJbWFnZXMgPSBfZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZSwgX2YgPSBvcHRpb25zLnJlY29yZENhbnZhcywgcmVjb3JkQ2FudmFzID0gX2YgPT09IHZvaWQgMCA/IGZhbHNlIDogX2YsIG9uU2VyaWFsaXplID0gb3B0aW9ucy5vblNlcmlhbGl6ZSwgb25JZnJhbWVMb2FkID0gb3B0aW9ucy5vbklmcmFtZUxvYWQsIF9nID0gb3B0aW9ucy5pZnJhbWVMb2FkVGltZW91dCwgaWZyYW1lTG9hZFRpbWVvdXQgPSBfZyA9PT0gdm9pZCAwID8gNTAwMCA6IF9nLCBvblN0eWxlc2hlZXRMb2FkID0gb3B0aW9ucy5vblN0eWxlc2hlZXRMb2FkLCBfaCA9IG9wdGlvbnMuc3R5bGVzaGVldExvYWRUaW1lb3V0LCBzdHlsZXNoZWV0TG9hZFRpbWVvdXQgPSBfaCA9PT0gdm9pZCAwID8gNTAwMCA6IF9oLCBfaiA9IG9wdGlvbnMua2VlcElmcmFtZVNyY0ZuLCBrZWVwSWZyYW1lU3JjRm4gPSBfaiA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0gOiBfaiwgX2sgPSBvcHRpb25zLm5ld2x5QWRkZWRFbGVtZW50LCBuZXdseUFkZGVkRWxlbWVudCA9IF9rID09PSB2b2lkIDAgPyBmYWxzZSA6IF9rO1xyXG4gICAgdmFyIF9sID0gb3B0aW9ucy5wcmVzZXJ2ZVdoaXRlU3BhY2UsIHByZXNlcnZlV2hpdGVTcGFjZSA9IF9sID09PSB2b2lkIDAgPyB0cnVlIDogX2w7XHJcbiAgICB2YXIgX3NlcmlhbGl6ZWROb2RlID0gc2VyaWFsaXplTm9kZShuLCB7XHJcbiAgICAgICAgZG9jOiBkb2MsXHJcbiAgICAgICAgbWlycm9yOiBtaXJyb3IsXHJcbiAgICAgICAgYmxvY2tDbGFzczogYmxvY2tDbGFzcyxcclxuICAgICAgICBibG9ja1NlbGVjdG9yOiBibG9ja1NlbGVjdG9yLFxyXG4gICAgICAgIG1hc2tUZXh0Q2xhc3M6IG1hc2tUZXh0Q2xhc3MsXHJcbiAgICAgICAgbWFza1RleHRTZWxlY3RvcjogbWFza1RleHRTZWxlY3RvcixcclxuICAgICAgICBpbmxpbmVTdHlsZXNoZWV0OiBpbmxpbmVTdHlsZXNoZWV0LFxyXG4gICAgICAgIG1hc2tJbnB1dE9wdGlvbnM6IG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgbWFza1RleHRGbjogbWFza1RleHRGbixcclxuICAgICAgICBtYXNrSW5wdXRGbjogbWFza0lucHV0Rm4sXHJcbiAgICAgICAgZGF0YVVSTE9wdGlvbnM6IGRhdGFVUkxPcHRpb25zLFxyXG4gICAgICAgIGlubGluZUltYWdlczogaW5saW5lSW1hZ2VzLFxyXG4gICAgICAgIHJlY29yZENhbnZhczogcmVjb3JkQ2FudmFzLFxyXG4gICAgICAgIGtlZXBJZnJhbWVTcmNGbjoga2VlcElmcmFtZVNyY0ZuLFxyXG4gICAgICAgIG5ld2x5QWRkZWRFbGVtZW50OiBuZXdseUFkZGVkRWxlbWVudFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIV9zZXJpYWxpemVkTm9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihuLCAnbm90IHNlcmlhbGl6ZWQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHZhciBpZDtcclxuICAgIGlmIChtaXJyb3IuaGFzTm9kZShuKSkge1xyXG4gICAgICAgIGlkID0gbWlycm9yLmdldElkKG4pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2xpbURPTUV4Y2x1ZGVkKF9zZXJpYWxpemVkTm9kZSwgc2xpbURPTU9wdGlvbnMpIHx8XHJcbiAgICAgICAgKCFwcmVzZXJ2ZVdoaXRlU3BhY2UgJiZcclxuICAgICAgICAgICAgX3NlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLlRleHQgJiZcclxuICAgICAgICAgICAgIV9zZXJpYWxpemVkTm9kZS5pc1N0eWxlICYmXHJcbiAgICAgICAgICAgICFfc2VyaWFsaXplZE5vZGUudGV4dENvbnRlbnQucmVwbGFjZSgvXlxccyt8XFxzKyQvZ20sICcnKS5sZW5ndGgpKSB7XHJcbiAgICAgICAgaWQgPSBJR05PUkVEX05PREU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZCA9IGdlbklkKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgc2VyaWFsaXplZE5vZGUgPSBPYmplY3QuYXNzaWduKF9zZXJpYWxpemVkTm9kZSwgeyBpZDogaWQgfSk7XHJcbiAgICBtaXJyb3IuYWRkKG4sIHNlcmlhbGl6ZWROb2RlKTtcclxuICAgIGlmIChpZCA9PT0gSUdOT1JFRF9OT0RFKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAob25TZXJpYWxpemUpIHtcclxuICAgICAgICBvblNlcmlhbGl6ZShuKTtcclxuICAgIH1cclxuICAgIHZhciByZWNvcmRDaGlsZCA9ICFza2lwQ2hpbGQ7XHJcbiAgICBpZiAoc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCkge1xyXG4gICAgICAgIHJlY29yZENoaWxkID0gcmVjb3JkQ2hpbGQgJiYgIXNlcmlhbGl6ZWROb2RlLm5lZWRCbG9jaztcclxuICAgICAgICBkZWxldGUgc2VyaWFsaXplZE5vZGUubmVlZEJsb2NrO1xyXG4gICAgICAgIHZhciBzaGFkb3dSb290ID0gbi5zaGFkb3dSb290O1xyXG4gICAgICAgIGlmIChzaGFkb3dSb290ICYmIGlzTmF0aXZlU2hhZG93RG9tKHNoYWRvd1Jvb3QpKVxyXG4gICAgICAgICAgICBzZXJpYWxpemVkTm9kZS5pc1NoYWRvd0hvc3QgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCB8fFxyXG4gICAgICAgIHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpICYmXHJcbiAgICAgICAgcmVjb3JkQ2hpbGQpIHtcclxuICAgICAgICBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZFdoaXRlc3BhY2UgJiZcclxuICAgICAgICAgICAgc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCAmJlxyXG4gICAgICAgICAgICBzZXJpYWxpemVkTm9kZS50YWdOYW1lID09PSAnaGVhZCcpIHtcclxuICAgICAgICAgICAgcHJlc2VydmVXaGl0ZVNwYWNlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBieXBhc3NPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBkb2M6IGRvYyxcclxuICAgICAgICAgICAgbWlycm9yOiBtaXJyb3IsXHJcbiAgICAgICAgICAgIGJsb2NrQ2xhc3M6IGJsb2NrQ2xhc3MsXHJcbiAgICAgICAgICAgIGJsb2NrU2VsZWN0b3I6IGJsb2NrU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIG1hc2tUZXh0Q2xhc3M6IG1hc2tUZXh0Q2xhc3MsXHJcbiAgICAgICAgICAgIG1hc2tUZXh0U2VsZWN0b3I6IG1hc2tUZXh0U2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHNraXBDaGlsZDogc2tpcENoaWxkLFxyXG4gICAgICAgICAgICBpbmxpbmVTdHlsZXNoZWV0OiBpbmxpbmVTdHlsZXNoZWV0LFxyXG4gICAgICAgICAgICBtYXNrSW5wdXRPcHRpb25zOiBtYXNrSW5wdXRPcHRpb25zLFxyXG4gICAgICAgICAgICBtYXNrVGV4dEZuOiBtYXNrVGV4dEZuLFxyXG4gICAgICAgICAgICBtYXNrSW5wdXRGbjogbWFza0lucHV0Rm4sXHJcbiAgICAgICAgICAgIHNsaW1ET01PcHRpb25zOiBzbGltRE9NT3B0aW9ucyxcclxuICAgICAgICAgICAgZGF0YVVSTE9wdGlvbnM6IGRhdGFVUkxPcHRpb25zLFxyXG4gICAgICAgICAgICBpbmxpbmVJbWFnZXM6IGlubGluZUltYWdlcyxcclxuICAgICAgICAgICAgcmVjb3JkQ2FudmFzOiByZWNvcmRDYW52YXMsXHJcbiAgICAgICAgICAgIHByZXNlcnZlV2hpdGVTcGFjZTogcHJlc2VydmVXaGl0ZVNwYWNlLFxyXG4gICAgICAgICAgICBvblNlcmlhbGl6ZTogb25TZXJpYWxpemUsXHJcbiAgICAgICAgICAgIG9uSWZyYW1lTG9hZDogb25JZnJhbWVMb2FkLFxyXG4gICAgICAgICAgICBpZnJhbWVMb2FkVGltZW91dDogaWZyYW1lTG9hZFRpbWVvdXQsXHJcbiAgICAgICAgICAgIG9uU3R5bGVzaGVldExvYWQ6IG9uU3R5bGVzaGVldExvYWQsXHJcbiAgICAgICAgICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dDogc3R5bGVzaGVldExvYWRUaW1lb3V0LFxyXG4gICAgICAgICAgICBrZWVwSWZyYW1lU3JjRm46IGtlZXBJZnJhbWVTcmNGblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfbSA9IEFycmF5LmZyb20obi5jaGlsZE5vZGVzKTsgX2kgPCBfbS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGNoaWxkTiA9IF9tW19pXTtcclxuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWRDaGlsZE5vZGUgPSBzZXJpYWxpemVOb2RlV2l0aElkKGNoaWxkTiwgYnlwYXNzT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmIChzZXJpYWxpemVkQ2hpbGROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkTm9kZS5jaGlsZE5vZGVzLnB1c2goc2VyaWFsaXplZENoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzRWxlbWVudChuKSAmJiBuLnNoYWRvd1Jvb3QpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX28gPSAwLCBfcCA9IEFycmF5LmZyb20obi5zaGFkb3dSb290LmNoaWxkTm9kZXMpOyBfbyA8IF9wLmxlbmd0aDsgX28rKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkTiA9IF9wW19vXTtcclxuICAgICAgICAgICAgICAgIHZhciBzZXJpYWxpemVkQ2hpbGROb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChjaGlsZE4sIGJ5cGFzc09wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWRDaGlsZE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc05hdGl2ZVNoYWRvd0RvbShuLnNoYWRvd1Jvb3QpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZXJpYWxpemVkQ2hpbGROb2RlLmlzU2hhZG93ID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplZE5vZGUuY2hpbGROb2Rlcy5wdXNoKHNlcmlhbGl6ZWRDaGlsZE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG4ucGFyZW50Tm9kZSAmJlxyXG4gICAgICAgIGlzU2hhZG93Um9vdChuLnBhcmVudE5vZGUpICYmXHJcbiAgICAgICAgaXNOYXRpdmVTaGFkb3dEb20obi5wYXJlbnROb2RlKSkge1xyXG4gICAgICAgIHNlcmlhbGl6ZWROb2RlLmlzU2hhZG93ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmXHJcbiAgICAgICAgc2VyaWFsaXplZE5vZGUudGFnTmFtZSA9PT0gJ2lmcmFtZScpIHtcclxuICAgICAgICBvbmNlSWZyYW1lTG9hZGVkKG4sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGlmcmFtZURvYyA9IG4uY29udGVudERvY3VtZW50O1xyXG4gICAgICAgICAgICBpZiAoaWZyYW1lRG9jICYmIG9uSWZyYW1lTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWRJZnJhbWVOb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChpZnJhbWVEb2MsIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2M6IGlmcmFtZURvYyxcclxuICAgICAgICAgICAgICAgICAgICBtaXJyb3I6IG1pcnJvcixcclxuICAgICAgICAgICAgICAgICAgICBibG9ja0NsYXNzOiBibG9ja0NsYXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrU2VsZWN0b3I6IGJsb2NrU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza1RleHRDbGFzczogbWFza1RleHRDbGFzcyxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrVGV4dFNlbGVjdG9yOiBtYXNrVGV4dFNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHNraXBDaGlsZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lU3R5bGVzaGVldDogaW5saW5lU3R5bGVzaGVldCxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrSW5wdXRPcHRpb25zOiBtYXNrSW5wdXRPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tUZXh0Rm46IG1hc2tUZXh0Rm4sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza0lucHV0Rm46IG1hc2tJbnB1dEZuLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaW1ET01PcHRpb25zOiBzbGltRE9NT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVVJMT3B0aW9uczogZGF0YVVSTE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lSW1hZ2VzOiBpbmxpbmVJbWFnZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkQ2FudmFzOiByZWNvcmRDYW52YXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVXaGl0ZVNwYWNlOiBwcmVzZXJ2ZVdoaXRlU3BhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TZXJpYWxpemU6IG9uU2VyaWFsaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uSWZyYW1lTG9hZDogb25JZnJhbWVMb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZUxvYWRUaW1lb3V0OiBpZnJhbWVMb2FkVGltZW91dCxcclxuICAgICAgICAgICAgICAgICAgICBvblN0eWxlc2hlZXRMb2FkOiBvblN0eWxlc2hlZXRMb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dDogc3R5bGVzaGVldExvYWRUaW1lb3V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGtlZXBJZnJhbWVTcmNGbjoga2VlcElmcmFtZVNyY0ZuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXJpYWxpemVkSWZyYW1lTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uSWZyYW1lTG9hZChuLCBzZXJpYWxpemVkSWZyYW1lTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBpZnJhbWVMb2FkVGltZW91dCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCAmJlxyXG4gICAgICAgIHNlcmlhbGl6ZWROb2RlLnRhZ05hbWUgPT09ICdsaW5rJyAmJlxyXG4gICAgICAgIHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMucmVsID09PSAnc3R5bGVzaGVldCcpIHtcclxuICAgICAgICBvbmNlU3R5bGVzaGVldExvYWRlZChuLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvblN0eWxlc2hlZXRMb2FkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VyaWFsaXplZExpbmtOb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChuLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jOiBkb2MsXHJcbiAgICAgICAgICAgICAgICAgICAgbWlycm9yOiBtaXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tDbGFzczogYmxvY2tDbGFzcyxcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1NlbGVjdG9yOiBibG9ja1NlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tUZXh0Q2xhc3M6IG1hc2tUZXh0Q2xhc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza1RleHRTZWxlY3RvcjogbWFza1RleHRTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBza2lwQ2hpbGQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVN0eWxlc2hlZXQ6IGlubGluZVN0eWxlc2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza0lucHV0T3B0aW9uczogbWFza0lucHV0T3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrVGV4dEZuOiBtYXNrVGV4dEZuLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tJbnB1dEZuOiBtYXNrSW5wdXRGbixcclxuICAgICAgICAgICAgICAgICAgICBzbGltRE9NT3B0aW9uczogc2xpbURPTU9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVVSTE9wdGlvbnM6IGRhdGFVUkxPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZUltYWdlczogaW5saW5lSW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZENhbnZhczogcmVjb3JkQ2FudmFzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlcnZlV2hpdGVTcGFjZTogcHJlc2VydmVXaGl0ZVNwYWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VyaWFsaXplOiBvblNlcmlhbGl6ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbklmcmFtZUxvYWQ6IG9uSWZyYW1lTG9hZCxcclxuICAgICAgICAgICAgICAgICAgICBpZnJhbWVMb2FkVGltZW91dDogaWZyYW1lTG9hZFRpbWVvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdHlsZXNoZWV0TG9hZDogb25TdHlsZXNoZWV0TG9hZCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQ6IHN0eWxlc2hlZXRMb2FkVGltZW91dCxcclxuICAgICAgICAgICAgICAgICAgICBrZWVwSWZyYW1lU3JjRm46IGtlZXBJZnJhbWVTcmNGblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VyaWFsaXplZExpbmtOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdHlsZXNoZWV0TG9hZChuLCBzZXJpYWxpemVkTGlua05vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgc3R5bGVzaGVldExvYWRUaW1lb3V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzZXJpYWxpemVkTm9kZTtcclxufVxyXG5mdW5jdGlvbiBzbmFwc2hvdChuLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgX2EgPSBvcHRpb25zIHx8IHt9LCBfYiA9IF9hLm1pcnJvciwgbWlycm9yID0gX2IgPT09IHZvaWQgMCA/IG5ldyBNaXJyb3IoKSA6IF9iLCBfYyA9IF9hLmJsb2NrQ2xhc3MsIGJsb2NrQ2xhc3MgPSBfYyA9PT0gdm9pZCAwID8gJ3JyLWJsb2NrJyA6IF9jLCBfZCA9IF9hLmJsb2NrU2VsZWN0b3IsIGJsb2NrU2VsZWN0b3IgPSBfZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9kLCBfZSA9IF9hLm1hc2tUZXh0Q2xhc3MsIG1hc2tUZXh0Q2xhc3MgPSBfZSA9PT0gdm9pZCAwID8gJ3JyLW1hc2snIDogX2UsIF9mID0gX2EubWFza1RleHRTZWxlY3RvciwgbWFza1RleHRTZWxlY3RvciA9IF9mID09PSB2b2lkIDAgPyBudWxsIDogX2YsIF9nID0gX2EuaW5saW5lU3R5bGVzaGVldCwgaW5saW5lU3R5bGVzaGVldCA9IF9nID09PSB2b2lkIDAgPyB0cnVlIDogX2csIF9oID0gX2EuaW5saW5lSW1hZ2VzLCBpbmxpbmVJbWFnZXMgPSBfaCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfaCwgX2ogPSBfYS5yZWNvcmRDYW52YXMsIHJlY29yZENhbnZhcyA9IF9qID09PSB2b2lkIDAgPyBmYWxzZSA6IF9qLCBfayA9IF9hLm1hc2tBbGxJbnB1dHMsIG1hc2tBbGxJbnB1dHMgPSBfayA9PT0gdm9pZCAwID8gZmFsc2UgOiBfaywgbWFza1RleHRGbiA9IF9hLm1hc2tUZXh0Rm4sIG1hc2tJbnB1dEZuID0gX2EubWFza0lucHV0Rm4sIF9sID0gX2Euc2xpbURPTSwgc2xpbURPTSA9IF9sID09PSB2b2lkIDAgPyBmYWxzZSA6IF9sLCBkYXRhVVJMT3B0aW9ucyA9IF9hLmRhdGFVUkxPcHRpb25zLCBwcmVzZXJ2ZVdoaXRlU3BhY2UgPSBfYS5wcmVzZXJ2ZVdoaXRlU3BhY2UsIG9uU2VyaWFsaXplID0gX2Eub25TZXJpYWxpemUsIG9uSWZyYW1lTG9hZCA9IF9hLm9uSWZyYW1lTG9hZCwgaWZyYW1lTG9hZFRpbWVvdXQgPSBfYS5pZnJhbWVMb2FkVGltZW91dCwgb25TdHlsZXNoZWV0TG9hZCA9IF9hLm9uU3R5bGVzaGVldExvYWQsIHN0eWxlc2hlZXRMb2FkVGltZW91dCA9IF9hLnN0eWxlc2hlZXRMb2FkVGltZW91dCwgX20gPSBfYS5rZWVwSWZyYW1lU3JjRm4sIGtlZXBJZnJhbWVTcmNGbiA9IF9tID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSA6IF9tO1xyXG4gICAgdmFyIG1hc2tJbnB1dE9wdGlvbnMgPSBtYXNrQWxsSW5wdXRzID09PSB0cnVlXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAnZGF0ZXRpbWUtbG9jYWwnOiB0cnVlLFxyXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgICAgICAgbW9udGg6IHRydWUsXHJcbiAgICAgICAgICAgIG51bWJlcjogdHJ1ZSxcclxuICAgICAgICAgICAgcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNlYXJjaDogdHJ1ZSxcclxuICAgICAgICAgICAgdGVsOiB0cnVlLFxyXG4gICAgICAgICAgICB0ZXh0OiB0cnVlLFxyXG4gICAgICAgICAgICB0aW1lOiB0cnVlLFxyXG4gICAgICAgICAgICB1cmw6IHRydWUsXHJcbiAgICAgICAgICAgIHdlZWs6IHRydWUsXHJcbiAgICAgICAgICAgIHRleHRhcmVhOiB0cnVlLFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDogbWFza0FsbElucHV0cyA9PT0gZmFsc2VcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDogbWFza0FsbElucHV0cztcclxuICAgIHZhciBzbGltRE9NT3B0aW9ucyA9IHNsaW1ET00gPT09IHRydWUgfHwgc2xpbURPTSA9PT0gJ2FsbCdcclxuICAgICAgICA/XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNjcmlwdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoZWFkRmF2aWNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhlYWRXaGl0ZXNwYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGVhZE1ldGFEZXNjS2V5d29yZHM6IHNsaW1ET00gPT09ICdhbGwnLFxyXG4gICAgICAgICAgICAgICAgaGVhZE1ldGFTb2NpYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoZWFkTWV0YVJvYm90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhlYWRNZXRhSHR0cEVxdWl2OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGVhZE1ldGFBdXRob3JzaGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGVhZE1ldGFWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDogc2xpbURPTSA9PT0gZmFsc2VcclxuICAgICAgICAgICAgPyB7fVxyXG4gICAgICAgICAgICA6IHNsaW1ET007XHJcbiAgICByZXR1cm4gc2VyaWFsaXplTm9kZVdpdGhJZChuLCB7XHJcbiAgICAgICAgZG9jOiBuLFxyXG4gICAgICAgIG1pcnJvcjogbWlycm9yLFxyXG4gICAgICAgIGJsb2NrQ2xhc3M6IGJsb2NrQ2xhc3MsXHJcbiAgICAgICAgYmxvY2tTZWxlY3RvcjogYmxvY2tTZWxlY3RvcixcclxuICAgICAgICBtYXNrVGV4dENsYXNzOiBtYXNrVGV4dENsYXNzLFxyXG4gICAgICAgIG1hc2tUZXh0U2VsZWN0b3I6IG1hc2tUZXh0U2VsZWN0b3IsXHJcbiAgICAgICAgc2tpcENoaWxkOiBmYWxzZSxcclxuICAgICAgICBpbmxpbmVTdHlsZXNoZWV0OiBpbmxpbmVTdHlsZXNoZWV0LFxyXG4gICAgICAgIG1hc2tJbnB1dE9wdGlvbnM6IG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgbWFza1RleHRGbjogbWFza1RleHRGbixcclxuICAgICAgICBtYXNrSW5wdXRGbjogbWFza0lucHV0Rm4sXHJcbiAgICAgICAgc2xpbURPTU9wdGlvbnM6IHNsaW1ET01PcHRpb25zLFxyXG4gICAgICAgIGRhdGFVUkxPcHRpb25zOiBkYXRhVVJMT3B0aW9ucyxcclxuICAgICAgICBpbmxpbmVJbWFnZXM6IGlubGluZUltYWdlcyxcclxuICAgICAgICByZWNvcmRDYW52YXM6IHJlY29yZENhbnZhcyxcclxuICAgICAgICBwcmVzZXJ2ZVdoaXRlU3BhY2U6IHByZXNlcnZlV2hpdGVTcGFjZSxcclxuICAgICAgICBvblNlcmlhbGl6ZTogb25TZXJpYWxpemUsXHJcbiAgICAgICAgb25JZnJhbWVMb2FkOiBvbklmcmFtZUxvYWQsXHJcbiAgICAgICAgaWZyYW1lTG9hZFRpbWVvdXQ6IGlmcmFtZUxvYWRUaW1lb3V0LFxyXG4gICAgICAgIG9uU3R5bGVzaGVldExvYWQ6IG9uU3R5bGVzaGVldExvYWQsXHJcbiAgICAgICAgc3R5bGVzaGVldExvYWRUaW1lb3V0OiBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsXHJcbiAgICAgICAga2VlcElmcmFtZVNyY0ZuOiBrZWVwSWZyYW1lU3JjRm4sXHJcbiAgICAgICAgbmV3bHlBZGRlZEVsZW1lbnQ6IGZhbHNlXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiB2aXNpdFNuYXBzaG90KG5vZGUsIG9uVmlzaXQpIHtcclxuICAgIGZ1bmN0aW9uIHdhbGsoY3VycmVudCkge1xyXG4gICAgICAgIG9uVmlzaXQoY3VycmVudCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQgfHxcclxuICAgICAgICAgICAgY3VycmVudC50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQuY2hpbGROb2Rlcy5mb3JFYWNoKHdhbGspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdhbGsobm9kZSk7XHJcbn1cclxuZnVuY3Rpb24gY2xlYW51cFNuYXBzaG90KCkge1xyXG4gICAgX2lkID0gMTtcclxufVxuXG52YXIgY29tbWVudHJlID0gL1xcL1xcKlteKl0qXFwqKyhbXi8qXVteKl0qXFwqKykqXFwvL2c7XHJcbmZ1bmN0aW9uIHBhcnNlKGNzcywgb3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgIHZhciBsaW5lbm8gPSAxO1xyXG4gICAgdmFyIGNvbHVtbiA9IDE7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbihzdHIpIHtcclxuICAgICAgICB2YXIgbGluZXMgPSBzdHIubWF0Y2goL1xcbi9nKTtcclxuICAgICAgICBpZiAobGluZXMpIHtcclxuICAgICAgICAgICAgbGluZW5vICs9IGxpbmVzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGkgPSBzdHIubGFzdEluZGV4T2YoJ1xcbicpO1xyXG4gICAgICAgIGNvbHVtbiA9IGkgPT09IC0xID8gY29sdW1uICsgc3RyLmxlbmd0aCA6IHN0ci5sZW5ndGggLSBpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcG9zaXRpb24oKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0geyBsaW5lOiBsaW5lbm8sIGNvbHVtbjogY29sdW1uIH07XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oc3RhcnQpO1xyXG4gICAgICAgICAgICB3aGl0ZXNwYWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICB2YXIgUG9zaXRpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIFBvc2l0aW9uKHN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgICAgICAgdGhpcy5lbmQgPSB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2x1bW4gfTtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBvcHRpb25zLnNvdXJjZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBvc2l0aW9uO1xyXG4gICAgfSgpKTtcclxuICAgIFBvc2l0aW9uLnByb3RvdHlwZS5jb250ZW50ID0gY3NzO1xyXG4gICAgdmFyIGVycm9yc0xpc3QgPSBbXTtcclxuICAgIGZ1bmN0aW9uIGVycm9yKG1zZykge1xyXG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXCJcIi5jb25jYXQob3B0aW9ucy5zb3VyY2UgfHwgJycsIFwiOlwiKS5jb25jYXQobGluZW5vLCBcIjpcIikuY29uY2F0KGNvbHVtbiwgXCI6IFwiKS5jb25jYXQobXNnKSk7XHJcbiAgICAgICAgZXJyLnJlYXNvbiA9IG1zZztcclxuICAgICAgICBlcnIuZmlsZW5hbWUgPSBvcHRpb25zLnNvdXJjZTtcclxuICAgICAgICBlcnIubGluZSA9IGxpbmVubztcclxuICAgICAgICBlcnIuY29sdW1uID0gY29sdW1uO1xyXG4gICAgICAgIGVyci5zb3VyY2UgPSBjc3M7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGVycm9yc0xpc3QucHVzaChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0eWxlc2hlZXQoKSB7XHJcbiAgICAgICAgdmFyIHJ1bGVzTGlzdCA9IHJ1bGVzKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogJ3N0eWxlc2hlZXQnLFxyXG4gICAgICAgICAgICBzdHlsZXNoZWV0OiB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IG9wdGlvbnMuc291cmNlLFxyXG4gICAgICAgICAgICAgICAgcnVsZXM6IHJ1bGVzTGlzdCxcclxuICAgICAgICAgICAgICAgIHBhcnNpbmdFcnJvcnM6IGVycm9yc0xpc3RcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvcGVuKCkge1xyXG4gICAgICAgIHJldHVybiBtYXRjaCgvXntcXHMqLyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgICAgICByZXR1cm4gbWF0Y2goL159Lyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBydWxlcygpIHtcclxuICAgICAgICB2YXIgbm9kZTtcclxuICAgICAgICB2YXIgcnVsZXMgPSBbXTtcclxuICAgICAgICB3aGl0ZXNwYWNlKCk7XHJcbiAgICAgICAgY29tbWVudHMocnVsZXMpO1xyXG4gICAgICAgIHdoaWxlIChjc3MubGVuZ3RoICYmIGNzcy5jaGFyQXQoMCkgIT09ICd9JyAmJiAobm9kZSA9IGF0cnVsZSgpIHx8IHJ1bGUoKSkpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHJ1bGVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50cyhydWxlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbWF0Y2gocmUpIHtcclxuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMoY3NzKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RyID0gbVswXTtcclxuICAgICAgICB1cGRhdGVQb3NpdGlvbihzdHIpO1xyXG4gICAgICAgIGNzcyA9IGNzcy5zbGljZShzdHIubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gbTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdoaXRlc3BhY2UoKSB7XHJcbiAgICAgICAgbWF0Y2goL15cXHMqLyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjb21tZW50cyhydWxlcykge1xyXG4gICAgICAgIGlmIChydWxlcyA9PT0gdm9pZCAwKSB7IHJ1bGVzID0gW107IH1cclxuICAgICAgICB2YXIgYztcclxuICAgICAgICB3aGlsZSAoKGMgPSBjb21tZW50KCkpKSB7XHJcbiAgICAgICAgICAgIGlmIChjKSB7XHJcbiAgICAgICAgICAgICAgICBydWxlcy5wdXNoKGMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGMgPSBjb21tZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBydWxlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvbW1lbnQoKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgaWYgKCcvJyAhPT0gY3NzLmNoYXJBdCgwKSB8fCAnKicgIT09IGNzcy5jaGFyQXQoMSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaSA9IDI7XHJcbiAgICAgICAgd2hpbGUgKCcnICE9PSBjc3MuY2hhckF0KGkpICYmXHJcbiAgICAgICAgICAgICgnKicgIT09IGNzcy5jaGFyQXQoaSkgfHwgJy8nICE9PSBjc3MuY2hhckF0KGkgKyAxKSkpIHtcclxuICAgICAgICAgICAgKytpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpICs9IDI7XHJcbiAgICAgICAgaWYgKCcnID09PSBjc3MuY2hhckF0KGkgLSAxKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ0VuZCBvZiBjb21tZW50IG1pc3NpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0ciA9IGNzcy5zbGljZSgyLCBpIC0gMik7XHJcbiAgICAgICAgY29sdW1uICs9IDI7XHJcbiAgICAgICAgdXBkYXRlUG9zaXRpb24oc3RyKTtcclxuICAgICAgICBjc3MgPSBjc3Muc2xpY2UoaSk7XHJcbiAgICAgICAgY29sdW1uICs9IDI7XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjb21tZW50JyxcclxuICAgICAgICAgICAgY29tbWVudDogc3RyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZWxlY3RvcigpIHtcclxuICAgICAgICB2YXIgbSA9IG1hdGNoKC9eKFtee10rKS8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cmltKG1bMF0pXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCooW14qXXxbXFxyXFxuXXwoXFwqKyhbXiovXXxbXFxyXFxuXSkpKSpcXCpcXC8rL2csICcnKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXCIoPzpcXFxcXCJ8W15cIl0pKlwifCcoPzpcXFxcJ3xbXiddKSonL2csIGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtLnJlcGxhY2UoLywvZywgJ1xcdTIwMEMnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3BsaXQoL1xccyooPyFbXihdKlxcKSksXFxzKi8pXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvXFx1MjAwQy9nLCAnLCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVjbGFyYXRpb24oKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIHByb3BNYXRjaCA9IG1hdGNoKC9eKFxcKj9bLSNcXC9cXCpcXFxcXFx3XSsoXFxbWzAtOWEtel8tXStcXF0pPylcXHMqLyk7XHJcbiAgICAgICAgaWYgKCFwcm9wTWF0Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJvcCA9IHRyaW0ocHJvcE1hdGNoWzBdKTtcclxuICAgICAgICBpZiAoIW1hdGNoKC9eOlxccyovKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJwcm9wZXJ0eSBtaXNzaW5nICc6J1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZhbCA9IG1hdGNoKC9eKCg/OicoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoW15cXCldKj9cXCl8W159O10pKykvKTtcclxuICAgICAgICB2YXIgcmV0ID0gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ2RlY2xhcmF0aW9uJyxcclxuICAgICAgICAgICAgcHJvcGVydHk6IHByb3AucmVwbGFjZShjb21tZW50cmUsICcnKSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbCA/IHRyaW0odmFsWzBdKS5yZXBsYWNlKGNvbW1lbnRyZSwgJycpIDogJydcclxuICAgICAgICB9KTtcclxuICAgICAgICBtYXRjaCgvXls7XFxzXSovKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVjbGFyYXRpb25zKCkge1xyXG4gICAgICAgIHZhciBkZWNscyA9IFtdO1xyXG4gICAgICAgIGlmICghb3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIm1pc3NpbmcgJ3snXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb21tZW50cyhkZWNscyk7XHJcbiAgICAgICAgdmFyIGRlY2w7XHJcbiAgICAgICAgd2hpbGUgKChkZWNsID0gZGVjbGFyYXRpb24oKSkpIHtcclxuICAgICAgICAgICAgaWYgKGRlY2wgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWNscy5wdXNoKGRlY2wpO1xyXG4gICAgICAgICAgICAgICAgY29tbWVudHMoZGVjbHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlY2wgPSBkZWNsYXJhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwibWlzc2luZyAnfSdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWNscztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGtleWZyYW1lKCkge1xyXG4gICAgICAgIHZhciBtO1xyXG4gICAgICAgIHZhciB2YWxzID0gW107XHJcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgd2hpbGUgKChtID0gbWF0Y2goL14oKFxcZCtcXC5cXGQrfFxcLlxcZCt8XFxkKyklP3xbYS16XSspXFxzKi8pKSkge1xyXG4gICAgICAgICAgICB2YWxzLnB1c2gobVsxXSk7XHJcbiAgICAgICAgICAgIG1hdGNoKC9eLFxccyovKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF2YWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAna2V5ZnJhbWUnLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IHZhbHMsXHJcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0a2V5ZnJhbWVzKCkge1xyXG4gICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AKFstXFx3XSspP2tleWZyYW1lc1xccyovKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmVuZG9yID0gbVsxXTtcclxuICAgICAgICBtID0gbWF0Y2goL14oWy1cXHddKylcXHMqLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcignQGtleWZyYW1lcyBtaXNzaW5nIG5hbWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5hbWUgPSBtWzFdO1xyXG4gICAgICAgIGlmICghb3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIkBrZXlmcmFtZXMgbWlzc2luZyAneydcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmcmFtZTtcclxuICAgICAgICB2YXIgZnJhbWVzID0gY29tbWVudHMoKTtcclxuICAgICAgICB3aGlsZSAoKGZyYW1lID0ga2V5ZnJhbWUoKSkpIHtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xyXG4gICAgICAgICAgICBmcmFtZXMgPSBmcmFtZXMuY29uY2F0KGNvbW1lbnRzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQGtleWZyYW1lcyBtaXNzaW5nICd9J1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdrZXlmcmFtZXMnLFxyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICB2ZW5kb3I6IHZlbmRvcixcclxuICAgICAgICAgICAga2V5ZnJhbWVzOiBmcmFtZXNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0c3VwcG9ydHMoKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXkBzdXBwb3J0cyAqKFtee10rKS8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdXBwb3J0cyA9IHRyaW0obVsxXSk7XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQHN1cHBvcnRzIG1pc3NpbmcgJ3snXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3R5bGUgPSBjb21tZW50cygpLmNvbmNhdChydWxlcygpKTtcclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQHN1cHBvcnRzIG1pc3NpbmcgJ30nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ3N1cHBvcnRzJyxcclxuICAgICAgICAgICAgc3VwcG9ydHM6IHN1cHBvcnRzLFxyXG4gICAgICAgICAgICBydWxlczogc3R5bGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0aG9zdCgpIHtcclxuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgbSA9IG1hdGNoKC9eQGhvc3RcXHMqLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQGhvc3QgbWlzc2luZyAneydcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdHlsZSA9IGNvbW1lbnRzKCkuY29uY2F0KHJ1bGVzKCkpO1xyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAaG9zdCBtaXNzaW5nICd9J1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdob3N0JyxcclxuICAgICAgICAgICAgcnVsZXM6IHN0eWxlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdG1lZGlhKCkge1xyXG4gICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AbWVkaWEgKihbXntdKykvKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWVkaWEgPSB0cmltKG1bMV0pO1xyXG4gICAgICAgIGlmICghb3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIkBtZWRpYSBtaXNzaW5nICd7J1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0eWxlID0gY29tbWVudHMoKS5jb25jYXQocnVsZXMoKSk7XHJcbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIkBtZWRpYSBtaXNzaW5nICd9J1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdtZWRpYScsXHJcbiAgICAgICAgICAgIG1lZGlhOiBtZWRpYSxcclxuICAgICAgICAgICAgcnVsZXM6IHN0eWxlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdGN1c3RvbW1lZGlhKCkge1xyXG4gICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AY3VzdG9tLW1lZGlhXFxzKygtLVteXFxzXSspXFxzKihbXns7XSspOy8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAnY3VzdG9tLW1lZGlhJyxcclxuICAgICAgICAgICAgbmFtZTogdHJpbShtWzFdKSxcclxuICAgICAgICAgICAgbWVkaWE6IHRyaW0obVsyXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0cGFnZSgpIHtcclxuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgbSA9IG1hdGNoKC9eQHBhZ2UgKi8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWwgPSBzZWxlY3RvcigpIHx8IFtdO1xyXG4gICAgICAgIGlmICghb3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIkBwYWdlIG1pc3NpbmcgJ3snXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGVjbHMgPSBjb21tZW50cygpO1xyXG4gICAgICAgIHZhciBkZWNsO1xyXG4gICAgICAgIHdoaWxlICgoZGVjbCA9IGRlY2xhcmF0aW9uKCkpKSB7XHJcbiAgICAgICAgICAgIGRlY2xzLnB1c2goZGVjbCk7XHJcbiAgICAgICAgICAgIGRlY2xzID0gZGVjbHMuY29uY2F0KGNvbW1lbnRzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQHBhZ2UgbWlzc2luZyAnfSdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAncGFnZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yczogc2VsLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdGRvY3VtZW50KCkge1xyXG4gICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AKFstXFx3XSspP2RvY3VtZW50ICooW157XSspLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZlbmRvciA9IHRyaW0obVsxXSk7XHJcbiAgICAgICAgdmFyIGRvYyA9IHRyaW0obVsyXSk7XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQGRvY3VtZW50IG1pc3NpbmcgJ3snXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3R5bGUgPSBjb21tZW50cygpLmNvbmNhdChydWxlcygpKTtcclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQGRvY3VtZW50IG1pc3NpbmcgJ30nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ2RvY3VtZW50JyxcclxuICAgICAgICAgICAgZG9jdW1lbnQ6IGRvYyxcclxuICAgICAgICAgICAgdmVuZG9yOiB2ZW5kb3IsXHJcbiAgICAgICAgICAgIHJ1bGVzOiBzdHlsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRmb250ZmFjZSgpIHtcclxuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgbSA9IG1hdGNoKC9eQGZvbnQtZmFjZVxccyovKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAZm9udC1mYWNlIG1pc3NpbmcgJ3snXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGVjbHMgPSBjb21tZW50cygpO1xyXG4gICAgICAgIHZhciBkZWNsO1xyXG4gICAgICAgIHdoaWxlICgoZGVjbCA9IGRlY2xhcmF0aW9uKCkpKSB7XHJcbiAgICAgICAgICAgIGRlY2xzLnB1c2goZGVjbCk7XHJcbiAgICAgICAgICAgIGRlY2xzID0gZGVjbHMuY29uY2F0KGNvbW1lbnRzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQGZvbnQtZmFjZSBtaXNzaW5nICd9J1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdmb250LWZhY2UnLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgYXRpbXBvcnQgPSBfY29tcGlsZUF0cnVsZSgnaW1wb3J0Jyk7XHJcbiAgICB2YXIgYXRjaGFyc2V0ID0gX2NvbXBpbGVBdHJ1bGUoJ2NoYXJzZXQnKTtcclxuICAgIHZhciBhdG5hbWVzcGFjZSA9IF9jb21waWxlQXRydWxlKCduYW1lc3BhY2UnKTtcclxuICAgIGZ1bmN0aW9uIF9jb21waWxlQXRydWxlKG5hbWUpIHtcclxuICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKCdeQCcgKyBuYW1lICsgJ1xcXFxzKihbXjtdKyk7Jyk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhciBtID0gbWF0Y2gocmUpO1xyXG4gICAgICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmV0ID0geyB0eXBlOiBuYW1lIH07XHJcbiAgICAgICAgICAgIHJldFtuYW1lXSA9IG1bMV0udHJpbSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zKHJldCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0cnVsZSgpIHtcclxuICAgICAgICBpZiAoY3NzWzBdICE9PSAnQCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGF0a2V5ZnJhbWVzKCkgfHxcclxuICAgICAgICAgICAgYXRtZWRpYSgpIHx8XHJcbiAgICAgICAgICAgIGF0Y3VzdG9tbWVkaWEoKSB8fFxyXG4gICAgICAgICAgICBhdHN1cHBvcnRzKCkgfHxcclxuICAgICAgICAgICAgYXRpbXBvcnQoKSB8fFxyXG4gICAgICAgICAgICBhdGNoYXJzZXQoKSB8fFxyXG4gICAgICAgICAgICBhdG5hbWVzcGFjZSgpIHx8XHJcbiAgICAgICAgICAgIGF0ZG9jdW1lbnQoKSB8fFxyXG4gICAgICAgICAgICBhdHBhZ2UoKSB8fFxyXG4gICAgICAgICAgICBhdGhvc3QoKSB8fFxyXG4gICAgICAgICAgICBhdGZvbnRmYWNlKCkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcnVsZSgpIHtcclxuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgc2VsID0gc2VsZWN0b3IoKTtcclxuICAgICAgICBpZiAoIXNlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ3NlbGVjdG9yIG1pc3NpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tbWVudHMoKTtcclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ3J1bGUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcnM6IHNlbCxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFkZFBhcmVudChzdHlsZXNoZWV0KCkpO1xyXG59XHJcbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyID8gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSA6ICcnO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFBhcmVudChvYmosIHBhcmVudCkge1xyXG4gICAgdmFyIGlzTm9kZSA9IG9iaiAmJiB0eXBlb2Ygb2JqLnR5cGUgPT09ICdzdHJpbmcnO1xyXG4gICAgdmFyIGNoaWxkUGFyZW50ID0gaXNOb2RlID8gb2JqIDogcGFyZW50O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG9iaik7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGsgPSBfYVtfaV07XHJcbiAgICAgICAgdmFyIHZhbHVlID0gb2JqW2tdO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICBhZGRQYXJlbnQodiwgY2hpbGRQYXJlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBhZGRQYXJlbnQodmFsdWUsIGNoaWxkUGFyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNOb2RlKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ3BhcmVudCcsIHtcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOiBwYXJlbnQgfHwgbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxufVxuXG52YXIgdGFnTWFwID0ge1xyXG4gICAgc2NyaXB0OiAnbm9zY3JpcHQnLFxyXG4gICAgYWx0Z2x5cGg6ICdhbHRHbHlwaCcsXHJcbiAgICBhbHRnbHlwaGRlZjogJ2FsdEdseXBoRGVmJyxcclxuICAgIGFsdGdseXBoaXRlbTogJ2FsdEdseXBoSXRlbScsXHJcbiAgICBhbmltYXRlY29sb3I6ICdhbmltYXRlQ29sb3InLFxyXG4gICAgYW5pbWF0ZW1vdGlvbjogJ2FuaW1hdGVNb3Rpb24nLFxyXG4gICAgYW5pbWF0ZXRyYW5zZm9ybTogJ2FuaW1hdGVUcmFuc2Zvcm0nLFxyXG4gICAgY2xpcHBhdGg6ICdjbGlwUGF0aCcsXHJcbiAgICBmZWJsZW5kOiAnZmVCbGVuZCcsXHJcbiAgICBmZWNvbG9ybWF0cml4OiAnZmVDb2xvck1hdHJpeCcsXHJcbiAgICBmZWNvbXBvbmVudHRyYW5zZmVyOiAnZmVDb21wb25lbnRUcmFuc2ZlcicsXHJcbiAgICBmZWNvbXBvc2l0ZTogJ2ZlQ29tcG9zaXRlJyxcclxuICAgIGZlY29udm9sdmVtYXRyaXg6ICdmZUNvbnZvbHZlTWF0cml4JyxcclxuICAgIGZlZGlmZnVzZWxpZ2h0aW5nOiAnZmVEaWZmdXNlTGlnaHRpbmcnLFxyXG4gICAgZmVkaXNwbGFjZW1lbnRtYXA6ICdmZURpc3BsYWNlbWVudE1hcCcsXHJcbiAgICBmZWRpc3RhbnRsaWdodDogJ2ZlRGlzdGFudExpZ2h0JyxcclxuICAgIGZlZHJvcHNoYWRvdzogJ2ZlRHJvcFNoYWRvdycsXHJcbiAgICBmZWZsb29kOiAnZmVGbG9vZCcsXHJcbiAgICBmZWZ1bmNhOiAnZmVGdW5jQScsXHJcbiAgICBmZWZ1bmNiOiAnZmVGdW5jQicsXHJcbiAgICBmZWZ1bmNnOiAnZmVGdW5jRycsXHJcbiAgICBmZWZ1bmNyOiAnZmVGdW5jUicsXHJcbiAgICBmZWdhdXNzaWFuYmx1cjogJ2ZlR2F1c3NpYW5CbHVyJyxcclxuICAgIGZlaW1hZ2U6ICdmZUltYWdlJyxcclxuICAgIGZlbWVyZ2U6ICdmZU1lcmdlJyxcclxuICAgIGZlbWVyZ2Vub2RlOiAnZmVNZXJnZU5vZGUnLFxyXG4gICAgZmVtb3JwaG9sb2d5OiAnZmVNb3JwaG9sb2d5JyxcclxuICAgIGZlb2Zmc2V0OiAnZmVPZmZzZXQnLFxyXG4gICAgZmVwb2ludGxpZ2h0OiAnZmVQb2ludExpZ2h0JyxcclxuICAgIGZlc3BlY3VsYXJsaWdodGluZzogJ2ZlU3BlY3VsYXJMaWdodGluZycsXHJcbiAgICBmZXNwb3RsaWdodDogJ2ZlU3BvdExpZ2h0JyxcclxuICAgIGZldGlsZTogJ2ZlVGlsZScsXHJcbiAgICBmZXR1cmJ1bGVuY2U6ICdmZVR1cmJ1bGVuY2UnLFxyXG4gICAgZm9yZWlnbm9iamVjdDogJ2ZvcmVpZ25PYmplY3QnLFxyXG4gICAgZ2x5cGhyZWY6ICdnbHlwaFJlZicsXHJcbiAgICBsaW5lYXJncmFkaWVudDogJ2xpbmVhckdyYWRpZW50JyxcclxuICAgIHJhZGlhbGdyYWRpZW50OiAncmFkaWFsR3JhZGllbnQnXHJcbn07XHJcbmZ1bmN0aW9uIGdldFRhZ05hbWUobikge1xyXG4gICAgdmFyIHRhZ05hbWUgPSB0YWdNYXBbbi50YWdOYW1lXSA/IHRhZ01hcFtuLnRhZ05hbWVdIDogbi50YWdOYW1lO1xyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdsaW5rJyAmJiBuLmF0dHJpYnV0ZXMuX2Nzc1RleHQpIHtcclxuICAgICAgICB0YWdOYW1lID0gJ3N0eWxlJztcclxuICAgIH1cclxuICAgIHJldHVybiB0YWdOYW1lO1xyXG59XHJcbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIpIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcclxufVxyXG52YXIgSE9WRVJfU0VMRUNUT1IgPSAvKFteXFxcXF0pOmhvdmVyLztcclxudmFyIEhPVkVSX1NFTEVDVE9SX0dMT0JBTCA9IG5ldyBSZWdFeHAoSE9WRVJfU0VMRUNUT1Iuc291cmNlLCAnZycpO1xyXG5mdW5jdGlvbiBhZGRIb3ZlckNsYXNzKGNzc1RleHQsIGNhY2hlKSB7XHJcbiAgICB2YXIgY2FjaGVkU3R5bGUgPSBjYWNoZSA9PT0gbnVsbCB8fCBjYWNoZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FjaGUuc3R5bGVzV2l0aEhvdmVyQ2xhc3MuZ2V0KGNzc1RleHQpO1xyXG4gICAgaWYgKGNhY2hlZFN0eWxlKVxyXG4gICAgICAgIHJldHVybiBjYWNoZWRTdHlsZTtcclxuICAgIHZhciBhc3QgPSBwYXJzZShjc3NUZXh0LCB7XHJcbiAgICAgICAgc2lsZW50OiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGlmICghYXN0LnN0eWxlc2hlZXQpIHtcclxuICAgICAgICByZXR1cm4gY3NzVGV4dDtcclxuICAgIH1cclxuICAgIHZhciBzZWxlY3RvcnMgPSBbXTtcclxuICAgIGFzdC5zdHlsZXNoZWV0LnJ1bGVzLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcclxuICAgICAgICBpZiAoJ3NlbGVjdG9ycycgaW4gcnVsZSkge1xyXG4gICAgICAgICAgICAocnVsZS5zZWxlY3RvcnMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoSE9WRVJfU0VMRUNUT1IudGVzdChzZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcnMucHVzaChzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKHNlbGVjdG9ycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gY3NzVGV4dDtcclxuICAgIH1cclxuICAgIHZhciBzZWxlY3Rvck1hdGNoZXIgPSBuZXcgUmVnRXhwKHNlbGVjdG9yc1xyXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNlbGVjdG9yLCBpbmRleCkgeyByZXR1cm4gc2VsZWN0b3JzLmluZGV4T2Yoc2VsZWN0b3IpID09PSBpbmRleDsgfSlcclxuICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDsgfSlcclxuICAgICAgICAubWFwKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBlc2NhcGVSZWdFeHAoc2VsZWN0b3IpO1xyXG4gICAgfSlcclxuICAgICAgICAuam9pbignfCcpLCAnZycpO1xyXG4gICAgdmFyIHJlc3VsdCA9IGNzc1RleHQucmVwbGFjZShzZWxlY3Rvck1hdGNoZXIsIGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciBuZXdTZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoSE9WRVJfU0VMRUNUT1JfR0xPQkFMLCAnJDEuXFxcXDpob3ZlcicpO1xyXG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChzZWxlY3RvciwgXCIsIFwiKS5jb25jYXQobmV3U2VsZWN0b3IpO1xyXG4gICAgfSk7XHJcbiAgICBjYWNoZSA9PT0gbnVsbCB8fCBjYWNoZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FjaGUuc3R5bGVzV2l0aEhvdmVyQ2xhc3Muc2V0KGNzc1RleHQsIHJlc3VsdCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xyXG4gICAgdmFyIHN0eWxlc1dpdGhIb3ZlckNsYXNzID0gbmV3IE1hcCgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdHlsZXNXaXRoSG92ZXJDbGFzczogc3R5bGVzV2l0aEhvdmVyQ2xhc3NcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gYnVpbGROb2RlKG4sIG9wdGlvbnMpIHtcclxuICAgIHZhciBkb2MgPSBvcHRpb25zLmRvYywgaGFja0NzcyA9IG9wdGlvbnMuaGFja0NzcywgY2FjaGUgPSBvcHRpb25zLmNhY2hlO1xyXG4gICAgc3dpdGNoIChuLnR5cGUpIHtcclxuICAgICAgICBjYXNlIE5vZGVUeXBlLkRvY3VtZW50OlxyXG4gICAgICAgICAgICByZXR1cm4gZG9jLmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KG51bGwsICcnLCBudWxsKTtcclxuICAgICAgICBjYXNlIE5vZGVUeXBlLkRvY3VtZW50VHlwZTpcclxuICAgICAgICAgICAgcmV0dXJuIGRvYy5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudFR5cGUobi5uYW1lIHx8ICdodG1sJywgbi5wdWJsaWNJZCwgbi5zeXN0ZW1JZCk7XHJcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5FbGVtZW50OiB7XHJcbiAgICAgICAgICAgIHZhciB0YWdOYW1lID0gZ2V0VGFnTmFtZShuKTtcclxuICAgICAgICAgICAgdmFyIG5vZGVfMTtcclxuICAgICAgICAgICAgaWYgKG4uaXNTVkcpIHtcclxuICAgICAgICAgICAgICAgIG5vZGVfMSA9IGRvYy5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdGFnTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlXzEgPSBkb2MuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc3BlY2lhbEF0dHJpYnV0ZXMgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZV8xIGluIG4uYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobi5hdHRyaWJ1dGVzLCBuYW1lXzEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBuLmF0dHJpYnV0ZXNbbmFtZV8xXTtcclxuICAgICAgICAgICAgICAgIGlmICh0YWdOYW1lID09PSAnb3B0aW9uJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVfMSA9PT0gJ3NlbGVjdGVkJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lXzEuc3RhcnRzV2l0aCgncnJfJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsQXR0cmlidXRlc1tuYW1lXzFdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNUZXh0YXJlYSA9IHRhZ05hbWUgPT09ICd0ZXh0YXJlYScgJiYgbmFtZV8xID09PSAndmFsdWUnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzUmVtb3RlT3JEeW5hbWljQ3NzID0gdGFnTmFtZSA9PT0gJ3N0eWxlJyAmJiBuYW1lXzEgPT09ICdfY3NzVGV4dCc7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSZW1vdGVPckR5bmFtaWNDc3MgJiYgaGFja0NzcyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhZGRIb3ZlckNsYXNzKHZhbHVlLCBjYWNoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKGlzVGV4dGFyZWEgfHwgaXNSZW1vdGVPckR5bmFtaWNDc3MpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBkb2MuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBBcnJheS5mcm9tKG5vZGVfMS5jaGlsZE5vZGVzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjLm5vZGVUeXBlID09PSBub2RlXzEuVEVYVF9OT0RFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlXzEucmVtb3ZlQ2hpbGQoYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZV8xLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaXNTVkcgJiYgbmFtZV8xID09PSAneGxpbms6aHJlZicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZV8xLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgbmFtZV8xLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZV8xID09PSAnb25sb2FkJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXzEgPT09ICdvbmNsaWNrJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXzEuc3Vic3RyaW5nKDAsIDcpID09PSAnb25tb3VzZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZV8xLnNldEF0dHJpYnV0ZSgnXycgKyBuYW1lXzEsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWdOYW1lID09PSAnbWV0YScgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hdHRyaWJ1dGVzWydodHRwLWVxdWl2J10gPT09ICdDb250ZW50LVNlY3VyaXR5LVBvbGljeScgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZV8xID09PSAnY29udGVudCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZV8xLnNldEF0dHJpYnV0ZSgnY3NwLWNvbnRlbnQnLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhZ05hbWUgPT09ICdsaW5rJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobi5hdHRyaWJ1dGVzLnJlbCA9PT0gJ3ByZWxvYWQnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmF0dHJpYnV0ZXMucmVsID09PSAnbW9kdWxlcHJlbG9hZCcpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uYXR0cmlidXRlcy5hcyA9PT0gJ3NjcmlwdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGFnTmFtZSA9PT0gJ2xpbmsnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uYXR0cmlidXRlcy5yZWwgPT09ICdwcmVmZXRjaCcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIG4uYXR0cmlidXRlcy5ocmVmID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmF0dHJpYnV0ZXMuaHJlZi5lbmRzV2l0aCgnLmpzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGFnTmFtZSA9PT0gJ2ltZycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hdHRyaWJ1dGVzLnNyY3NldCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmF0dHJpYnV0ZXMucnJfZGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlXzEuc2V0QXR0cmlidXRlKCdycndlYi1vcmlnaW5hbC1zcmNzZXQnLCBuLmF0dHJpYnV0ZXMuc3Jjc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVfMS5zZXRBdHRyaWJ1dGUobmFtZV8xLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChuYW1lXzIpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNwZWNpYWxBdHRyaWJ1dGVzW25hbWVfMl07XHJcbiAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ2NhbnZhcycgJiYgbmFtZV8yID09PSAncnJfZGF0YVVSTCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2VfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXzEub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3R4ID0gbm9kZV8xLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VfMSwgMCwgMCwgaW1hZ2VfMS53aWR0aCwgaW1hZ2VfMS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZV8xLnNyYyA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVfMS5SUk5vZGVUeXBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlXzEucnJfZGF0YVVSTCA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWdOYW1lID09PSAnaW1nJyAmJiBuYW1lXzIgPT09ICdycl9kYXRhVVJMJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9IG5vZGVfMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWltYWdlLmN1cnJlbnRTcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3Jyd2ViLW9yaWdpbmFsLXNyYycsIG4uYXR0cmlidXRlcy5zcmMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lXzIgPT09ICdycl93aWR0aCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlXzEuc3R5bGUud2lkdGggPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZV8yID09PSAncnJfaGVpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVfMS5zdHlsZS5oZWlnaHQgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZV8yID09PSAncnJfbWVkaWFDdXJyZW50VGltZScgJiZcclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZV8xLmN1cnJlbnRUaW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lXzIgPT09ICdycl9tZWRpYVN0YXRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncGxheWVkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVfMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGF5KClbXCJjYXRjaFwiXShmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS53YXJuKCdtZWRpYSBwbGF5YmFjayBlcnJvcicsIGUpOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwYXVzZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZV8xLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWVfMiBpbiBzcGVjaWFsQXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgX2xvb3BfMShuYW1lXzIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuLmlzU2hhZG93SG9zdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFub2RlXzEuc2hhZG93Um9vdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVfMS5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobm9kZV8xLnNoYWRvd1Jvb3QuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlXzEuc2hhZG93Um9vdC5yZW1vdmVDaGlsZChub2RlXzEuc2hhZG93Um9vdC5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5vZGVfMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5UZXh0OlxyXG4gICAgICAgICAgICByZXR1cm4gZG9jLmNyZWF0ZVRleHROb2RlKG4uaXNTdHlsZSAmJiBoYWNrQ3NzXHJcbiAgICAgICAgICAgICAgICA/IGFkZEhvdmVyQ2xhc3Mobi50ZXh0Q29udGVudCwgY2FjaGUpXHJcbiAgICAgICAgICAgICAgICA6IG4udGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGNhc2UgTm9kZVR5cGUuQ0RBVEE6XHJcbiAgICAgICAgICAgIHJldHVybiBkb2MuY3JlYXRlQ0RBVEFTZWN0aW9uKG4udGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGNhc2UgTm9kZVR5cGUuQ29tbWVudDpcclxuICAgICAgICAgICAgcmV0dXJuIGRvYy5jcmVhdGVDb21tZW50KG4udGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkTm9kZVdpdGhTTihuLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZG9jID0gb3B0aW9ucy5kb2MsIG1pcnJvciA9IG9wdGlvbnMubWlycm9yLCBfYSA9IG9wdGlvbnMuc2tpcENoaWxkLCBza2lwQ2hpbGQgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLmhhY2tDc3MsIGhhY2tDc3MgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBhZnRlckFwcGVuZCA9IG9wdGlvbnMuYWZ0ZXJBcHBlbmQsIGNhY2hlID0gb3B0aW9ucy5jYWNoZTtcclxuICAgIGlmIChtaXJyb3IuaGFzKG4uaWQpKSB7XHJcbiAgICAgICAgdmFyIG5vZGVJbk1pcnJvciA9IG1pcnJvci5nZXROb2RlKG4uaWQpO1xyXG4gICAgICAgIHZhciBtZXRhID0gbWlycm9yLmdldE1ldGEobm9kZUluTWlycm9yKTtcclxuICAgICAgICBpZiAoaXNOb2RlTWV0YUVxdWFsKG1ldGEsIG4pKVxyXG4gICAgICAgICAgICByZXR1cm4gbWlycm9yLmdldE5vZGUobi5pZCk7XHJcbiAgICB9XHJcbiAgICB2YXIgbm9kZSA9IGJ1aWxkTm9kZShuLCB7IGRvYzogZG9jLCBoYWNrQ3NzOiBoYWNrQ3NzLCBjYWNoZTogY2FjaGUgfSk7XHJcbiAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChuLnJvb3RJZCAmJiBtaXJyb3IuZ2V0Tm9kZShuLnJvb3RJZCkgIT09IGRvYykge1xyXG4gICAgICAgIG1pcnJvci5yZXBsYWNlKG4ucm9vdElkLCBkb2MpO1xyXG4gICAgfVxyXG4gICAgaWYgKG4udHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQpIHtcclxuICAgICAgICBkb2MuY2xvc2UoKTtcclxuICAgICAgICBkb2Mub3BlbigpO1xyXG4gICAgICAgIGlmIChuLmNvbXBhdE1vZGUgPT09ICdCYWNrQ29tcGF0JyAmJlxyXG4gICAgICAgICAgICBuLmNoaWxkTm9kZXMgJiZcclxuICAgICAgICAgICAgbi5jaGlsZE5vZGVzWzBdLnR5cGUgIT09IE5vZGVUeXBlLkRvY3VtZW50VHlwZSkge1xyXG4gICAgICAgICAgICBpZiAobi5jaGlsZE5vZGVzWzBdLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICd4bWxucycgaW4gbi5jaGlsZE5vZGVzWzBdLmF0dHJpYnV0ZXMgJiZcclxuICAgICAgICAgICAgICAgIG4uY2hpbGROb2Rlc1swXS5hdHRyaWJ1dGVzLnhtbG5zID09PSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcpIHtcclxuICAgICAgICAgICAgICAgIGRvYy53cml0ZSgnPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFRyYW5zaXRpb25hbC8vRU5cIiBcIlwiPicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jLndyaXRlKCc8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBIVE1MIDQuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJcIj4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBub2RlID0gZG9jO1xyXG4gICAgfVxyXG4gICAgbWlycm9yLmFkZChub2RlLCBuKTtcclxuICAgIGlmICgobi50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCB8fCBuLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpICYmXHJcbiAgICAgICAgIXNraXBDaGlsZCkge1xyXG4gICAgICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKGNoaWxkTikge1xyXG4gICAgICAgICAgICB2YXIgY2hpbGROb2RlID0gYnVpbGROb2RlV2l0aFNOKGNoaWxkTiwge1xyXG4gICAgICAgICAgICAgICAgZG9jOiBkb2MsXHJcbiAgICAgICAgICAgICAgICBtaXJyb3I6IG1pcnJvcixcclxuICAgICAgICAgICAgICAgIHNraXBDaGlsZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoYWNrQ3NzOiBoYWNrQ3NzLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJBcHBlbmQ6IGFmdGVyQXBwZW5kLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IGNhY2hlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gcmVidWlsZCcsIGNoaWxkTik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjaGlsZE4uaXNTaGFkb3cgJiYgaXNFbGVtZW50KG5vZGUpICYmIG5vZGUuc2hhZG93Um9vdCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zaGFkb3dSb290LmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobi50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCAmJlxyXG4gICAgICAgICAgICAgICAgY2hpbGROLnR5cGUgPT0gTm9kZVR5cGUuRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGh0bWxFbGVtZW50ID0gY2hpbGROb2RlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvZHlfMSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBodG1sRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVOYW1lID09PSAnQk9EWScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlfMSA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9keV8xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEVsZW1lbnQucmVtb3ZlQ2hpbGQoYm9keV8xKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keV8xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYWZ0ZXJBcHBlbmQpIHtcclxuICAgICAgICAgICAgICAgIGFmdGVyQXBwZW5kKGNoaWxkTm9kZSwgY2hpbGROLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYyA9IG4uY2hpbGROb2RlczsgX2kgPCBfYy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGNoaWxkTiA9IF9jW19pXTtcclxuICAgICAgICAgICAgX2xvb3BfMihjaGlsZE4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBub2RlO1xyXG59XHJcbmZ1bmN0aW9uIHZpc2l0KG1pcnJvciwgb25WaXNpdCkge1xyXG4gICAgZnVuY3Rpb24gd2Fsayhub2RlKSB7XHJcbiAgICAgICAgb25WaXNpdChub2RlKTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBtaXJyb3IuZ2V0SWRzKCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGlkID0gX2FbX2ldO1xyXG4gICAgICAgIGlmIChtaXJyb3IuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICB3YWxrKG1pcnJvci5nZXROb2RlKGlkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZVNjcm9sbChub2RlLCBtaXJyb3IpIHtcclxuICAgIHZhciBuID0gbWlycm9yLmdldE1ldGEobm9kZSk7XHJcbiAgICBpZiAoKG4gPT09IG51bGwgfHwgbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbi50eXBlKSAhPT0gTm9kZVR5cGUuRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBlbCA9IG5vZGU7XHJcbiAgICBmb3IgKHZhciBuYW1lXzMgaW4gbi5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgaWYgKCEoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4uYXR0cmlidXRlcywgbmFtZV8zKSAmJlxyXG4gICAgICAgICAgICBuYW1lXzMuc3RhcnRzV2l0aCgncnJfJykpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmFsdWUgPSBuLmF0dHJpYnV0ZXNbbmFtZV8zXTtcclxuICAgICAgICBpZiAobmFtZV8zID09PSAncnJfc2Nyb2xsTGVmdCcpIHtcclxuICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZV8zID09PSAncnJfc2Nyb2xsVG9wJykge1xyXG4gICAgICAgICAgICBlbC5zY3JvbGxUb3AgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVidWlsZChuLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZG9jID0gb3B0aW9ucy5kb2MsIG9uVmlzaXQgPSBvcHRpb25zLm9uVmlzaXQsIF9hID0gb3B0aW9ucy5oYWNrQ3NzLCBoYWNrQ3NzID0gX2EgPT09IHZvaWQgMCA/IHRydWUgOiBfYSwgYWZ0ZXJBcHBlbmQgPSBvcHRpb25zLmFmdGVyQXBwZW5kLCBjYWNoZSA9IG9wdGlvbnMuY2FjaGUsIF9iID0gb3B0aW9ucy5taXJyb3IsIG1pcnJvciA9IF9iID09PSB2b2lkIDAgPyBuZXcgTWlycm9yKCkgOiBfYjtcclxuICAgIHZhciBub2RlID0gYnVpbGROb2RlV2l0aFNOKG4sIHtcclxuICAgICAgICBkb2M6IGRvYyxcclxuICAgICAgICBtaXJyb3I6IG1pcnJvcixcclxuICAgICAgICBza2lwQ2hpbGQ6IGZhbHNlLFxyXG4gICAgICAgIGhhY2tDc3M6IGhhY2tDc3MsXHJcbiAgICAgICAgYWZ0ZXJBcHBlbmQ6IGFmdGVyQXBwZW5kLFxyXG4gICAgICAgIGNhY2hlOiBjYWNoZVxyXG4gICAgfSk7XHJcbiAgICB2aXNpdChtaXJyb3IsIGZ1bmN0aW9uICh2aXNpdGVkTm9kZSkge1xyXG4gICAgICAgIGlmIChvblZpc2l0KSB7XHJcbiAgICAgICAgICAgIG9uVmlzaXQodmlzaXRlZE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVTY3JvbGwodmlzaXRlZE5vZGUsIG1pcnJvcik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBub2RlO1xyXG59XG5cbmV4cG9ydCB7IElHTk9SRURfTk9ERSwgTWlycm9yLCBOb2RlVHlwZSwgYWRkSG92ZXJDbGFzcywgYnVpbGROb2RlV2l0aFNOLCBjbGFzc01hdGNoZXNSZWdleCwgY2xlYW51cFNuYXBzaG90LCBjcmVhdGVDYWNoZSwgY3JlYXRlTWlycm9yLCBlc2NhcGVJbXBvcnRTdGF0ZW1lbnQsIGdlbklkLCBnZXRJbnB1dFR5cGUsIGlnbm9yZUF0dHJpYnV0ZSwgaXMyRENhbnZhc0JsYW5rLCBpc0NTU0ltcG9ydFJ1bGUsIGlzRWxlbWVudCwgaXNOYXRpdmVTaGFkb3dEb20sIGlzTm9kZU1ldGFFcXVhbCwgaXNTaGFkb3dSb290LCBtYXNrSW5wdXRWYWx1ZSwgbmVlZE1hc2tpbmdUZXh0LCByZWJ1aWxkLCBzZXJpYWxpemVOb2RlV2l0aElkLCBzbmFwc2hvdCwgc3RyaW5naWZ5UnVsZSwgc3RyaW5naWZ5U3R5bGVzaGVldCwgdG9Mb3dlckNhc2UsIHRyYW5zZm9ybUF0dHJpYnV0ZSwgdmFsaWRhdGVTdHJpbmdpZmllZENzc1J1bGUsIHZpc2l0U25hcHNob3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gVGhpcyBleGFtcGxlIHN1cHBvcnQvZTJlLnRzIGlzIHByb2Nlc3NlZCBhbmRcbi8vIGxvYWRlZCBhdXRvbWF0aWNhbGx5IGJlZm9yZSB5b3VyIHRlc3QgZmlsZXMuXG4vL1xuLy8gVGhpcyBpcyBhIGdyZWF0IHBsYWNlIHRvIHB1dCBnbG9iYWwgY29uZmlndXJhdGlvbiBhbmRcbi8vIGJlaGF2aW9yIHRoYXQgbW9kaWZpZXMgQ3lwcmVzcy5cbi8vXG4vLyBZb3UgY2FuIGNoYW5nZSB0aGUgbG9jYXRpb24gb2YgdGhpcyBmaWxlIG9yIHR1cm4gb2ZmXG4vLyBhdXRvbWF0aWNhbGx5IHNlcnZpbmcgc3VwcG9ydCBmaWxlcyB3aXRoIHRoZVxuLy8gJ3N1cHBvcnRGaWxlJyBjb25maWd1cmF0aW9uIG9wdGlvbi5cbi8vXG4vLyBZb3UgY2FuIHJlYWQgbW9yZSBoZXJlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2NvbmZpZ3VyYXRpb25cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJbXBvcnQgY29tbWFuZHMudHMgdXNpbmcgRVMyMDE1IHN5bnRheDpcbnJlcXVpcmUoXCIuL2NvbW1hbmRzXCIpO1xucmVxdWlyZShcIkBjaHJvbWF0aWMtY29tL2N5cHJlc3Mvc3VwcG9ydFwiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpUSmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2WkdWemFXZHVMWE41YzNSbGJTOWplWEJ5WlhOekwzTjFjSEJ2Y25RdlpUSmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzRSRUZCT0VRN1FVRkRPVVFzSzBOQlFTdERPMEZCUXk5RExDdERRVUVyUXp0QlFVTXZReXhGUVVGRk8wRkJRMFlzZDBSQlFYZEVPMEZCUTNoRUxHdERRVUZyUXp0QlFVTnNReXhGUVVGRk8wRkJRMFlzZFVSQlFYVkVPMEZCUTNaRUxDdERRVUVyUXp0QlFVTXZReXh6UTBGQmMwTTdRVUZEZEVNc1JVRkJSVHRCUVVOR0xEQkNRVUV3UWp0QlFVTXhRaXh6UTBGQmMwTTdRVUZEZEVNc09FUkJRVGhFT3p0QlFVVTVSQ3d3UTBGQk1FTTdRVUZETVVNc2MwSkJRVzFDTzBGQlEyNUNMREJEUVVGMVF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUNvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzR2THlCVWFHbHpJR1Y0WVcxd2JHVWdjM1Z3Y0c5eWRDOWxNbVV1ZEhNZ2FYTWdjSEp2WTJWemMyVmtJR0Z1WkZ4dUx5OGdiRzloWkdWa0lHRjFkRzl0WVhScFkyRnNiSGtnWW1WbWIzSmxJSGx2ZFhJZ2RHVnpkQ0JtYVd4bGN5NWNiaTh2WEc0dkx5QlVhR2x6SUdseklHRWdaM0psWVhRZ2NHeGhZMlVnZEc4Z2NIVjBJR2RzYjJKaGJDQmpiMjVtYVdkMWNtRjBhVzl1SUdGdVpGeHVMeThnWW1Wb1lYWnBiM0lnZEdoaGRDQnRiMlJwWm1sbGN5QkRlWEJ5WlhOekxseHVMeTljYmk4dklGbHZkU0JqWVc0Z1kyaGhibWRsSUhSb1pTQnNiMk5oZEdsdmJpQnZaaUIwYUdseklHWnBiR1VnYjNJZ2RIVnliaUJ2Wm1aY2JpOHZJR0YxZEc5dFlYUnBZMkZzYkhrZ2MyVnlkbWx1WnlCemRYQndiM0owSUdacGJHVnpJSGRwZEdnZ2RHaGxYRzR2THlBbmMzVndjRzl5ZEVacGJHVW5JR052Ym1acFozVnlZWFJwYjI0Z2IzQjBhVzl1TGx4dUx5OWNiaTh2SUZsdmRTQmpZVzRnY21WaFpDQnRiM0psSUdobGNtVTZYRzR2THlCb2RIUndjem92TDI5dUxtTjVjSEpsYzNNdWFXOHZZMjl1Wm1sbmRYSmhkR2x2Ymx4dUx5OGdLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JseHVMeThnU1cxd2IzSjBJR052YlcxaGJtUnpMblJ6SUhWemFXNW5JRVZUTWpBeE5TQnplVzUwWVhnNlhHNXBiWEJ2Y25RZ0p5NHZZMjl0YldGdVpITW5YRzVwYlhCdmNuUWdKMEJqYUhKdmJXRjBhV010WTI5dEwyTjVjSEpsYzNNdmMzVndjRzl5ZENkY2JpSmRmUT09Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9