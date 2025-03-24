"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.containerConfig = exports.singfuseColors = exports.colors = exports.plugin = void 0;
const default_1 = __importDefault(require("./colors/default"));
exports.colors = default_1.default;
const singfuse_1 = __importDefault(require("./colors/singfuse"));
exports.singfuseColors = singfuse_1.default;
const container_1 = __importDefault(require("./config/container"));
exports.containerConfig = container_1.default;
const plugin_1 = __importDefault(require("./plugin"));
exports.plugin = plugin_1.default;
