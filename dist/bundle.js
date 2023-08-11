/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./components/project-input */ \"./src/components/project-input.ts\"), __webpack_require__(/*! ./components/project-list */ \"./src/components/project-list.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, project_input_1, project_list_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    new project_input_1.ProjectInput();\n    new project_list_1.ProjectList('active');\n    new project_list_1.ProjectList('finished');\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://dragg-drop-app/./src/app.ts?");

/***/ }),

/***/ "./src/components/base-component.ts":
/*!******************************************!*\
  !*** ./src/components/base-component.ts ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    class Component {\n        constructor(templateId, hostElementId, insertAtStart, newElementId) {\n            this.templateElement = document.getElementById(templateId);\n            this.hostElement = document.getElementById(hostElementId);\n            const importedNode = document.importNode(this.templateElement.content, true);\n            this.element = importedNode.firstElementChild;\n            if (newElementId) {\n                this.element.id = newElementId;\n            }\n            this.attach(insertAtStart);\n        }\n        attach(insertAtBeginning) {\n            this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);\n        }\n    }\n    exports[\"default\"] = Component;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://dragg-drop-app/./src/components/base-component.ts?");

/***/ }),

/***/ "./src/components/project-input.ts":
/*!*****************************************!*\
  !*** ./src/components/project-input.ts ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./base-component */ \"./src/components/base-component.ts\"), __webpack_require__(/*! ../util/validation */ \"./src/util/validation.ts\"), __webpack_require__(/*! ../decorators/autobind */ \"./src/decorators/autobind.ts\"), __webpack_require__(/*! ../state/project-state */ \"./src/state/project-state.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, base_component_1, Validation, autobind_1, project_state_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.ProjectInput = void 0;\n    base_component_1 = __importDefault(base_component_1);\n    Validation = __importStar(Validation);\n    class ProjectInput extends base_component_1.default {\n        constructor() {\n            super('project-input', 'app', true, 'user-input');\n            this.titleInputElement = this.element.querySelector('#title');\n            this.descriptionInputElement = this.element.querySelector('#description');\n            this.peopleInputElement = this.element.querySelector('#people');\n            this.configure();\n        }\n        configure() {\n            this.element.addEventListener('submit', this.submitHandler);\n        }\n        renderContent() { }\n        gatherUserInput() {\n            const enteredTitle = this.titleInputElement.value;\n            const enteredDescription = this.descriptionInputElement.value;\n            const enteredPeople = this.peopleInputElement.value;\n            const titleValidatable = {\n                value: enteredTitle,\n                required: true,\n                minLength: 0\n            };\n            const descriptionValidatable = {\n                value: enteredDescription,\n                required: true,\n                minLength: 4\n            };\n            const peopleValidatable = {\n                value: +enteredPeople,\n                required: true,\n                min: 1,\n                max: 50\n            };\n            if (!Validation.validate(titleValidatable) ||\n                !Validation.validate(descriptionValidatable) ||\n                !Validation.validate(peopleValidatable)) {\n                if (!Validation.validate(titleValidatable)) {\n                    alert('Error title field: Enter at least 1 characters');\n                    return;\n                }\n                if (!Validation.validate(descriptionValidatable)) {\n                    alert('Error description field: Enter at least 5 characters');\n                    return;\n                }\n                if (!Validation.validate(peopleValidatable)) {\n                    alert('Error people field: Enter a number between 1 and 50');\n                    return;\n                }\n            }\n            else {\n                return [enteredTitle, enteredDescription, +enteredPeople];\n            }\n        }\n        clearInputs() {\n            this.titleInputElement.value = '';\n            this.descriptionInputElement.value = '';\n            this.peopleInputElement.value = '';\n        }\n        submitHandler(event) {\n            event.preventDefault();\n            const userInput = this.gatherUserInput();\n            if (Array.isArray(userInput)) {\n                const [title, desc, people] = userInput;\n                project_state_1.projectState.addProject(title, desc, people);\n                this.clearInputs();\n            }\n        }\n    }\n    exports.ProjectInput = ProjectInput;\n    __decorate([\n        autobind_1.Autobind\n    ], ProjectInput.prototype, \"submitHandler\", null);\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://dragg-drop-app/./src/components/project-input.ts?");

/***/ }),

/***/ "./src/components/project-item.ts":
/*!****************************************!*\
  !*** ./src/components/project-item.ts ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./base-component */ \"./src/components/base-component.ts\"), __webpack_require__(/*! ../decorators/autobind */ \"./src/decorators/autobind.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, base_component_1, autobind_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.ProjectItem = void 0;\n    base_component_1 = __importDefault(base_component_1);\n    class ProjectItem extends base_component_1.default {\n        get persons() {\n            if (this.project.people === 1) {\n                return '1 person';\n            }\n            else {\n                return `${this.project.people} persons`;\n            }\n        }\n        constructor(hostId, project) {\n            super('single-project', hostId, false, project.id);\n            this.project = project;\n            this.configure();\n            this.renderContent();\n        }\n        dragStartHandler(event) {\n            event.dataTransfer.setData('text/plain', this.project.id);\n            event.dataTransfer.effectAllowed = 'move';\n        }\n        dragEndHandler(_) {\n            console.log('Drag End');\n        }\n        configure() {\n            this.element.addEventListener('dragstart', this.dragStartHandler);\n            this.element.addEventListener('dragstart', this.dragEndHandler);\n        }\n        renderContent() {\n            this.element.querySelector('h2').textContent = this.project.title;\n            this.element.querySelector('h3').textContent = this.persons + ' assigned';\n            this.element.querySelector('p').textContent = this.project.description;\n        }\n    }\n    exports.ProjectItem = ProjectItem;\n    __decorate([\n        autobind_1.Autobind\n    ], ProjectItem.prototype, \"dragStartHandler\", null);\n    __decorate([\n        autobind_1.Autobind\n    ], ProjectItem.prototype, \"dragEndHandler\", null);\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://dragg-drop-app/./src/components/project-item.ts?");

/***/ }),

/***/ "./src/components/project-list.ts":
/*!****************************************!*\
  !*** ./src/components/project-list.ts ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../models/project */ \"./src/models/project.ts\"), __webpack_require__(/*! ./base-component */ \"./src/components/base-component.ts\"), __webpack_require__(/*! ../decorators/autobind */ \"./src/decorators/autobind.ts\"), __webpack_require__(/*! ../state/project-state */ \"./src/state/project-state.ts\"), __webpack_require__(/*! ./project-item */ \"./src/components/project-item.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, project_1, base_component_1, autobind_1, project_state_1, project_item_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.ProjectList = void 0;\n    base_component_1 = __importDefault(base_component_1);\n    class ProjectList extends base_component_1.default {\n        constructor(type) {\n            super('project-list', 'app', false, `${type}-projects`);\n            this.type = type;\n            this.assignedProjects = [];\n            this.configure();\n            this.renderContent();\n        }\n        dragOverHandler(event) {\n            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {\n                event.preventDefault();\n                const listEl = this.element.querySelector('ul');\n                listEl.classList.add('droppable');\n            }\n        }\n        dropHandler(event) {\n            const prjId = event.dataTransfer.getData('text/plain');\n            project_state_1.projectState.moveProject(prjId, this.type === 'active' ? project_1.ProjectStatus.Active :\n                project_1.ProjectStatus.Finished);\n        }\n        dragLeaveHandler(_) {\n            const listEl = this.element.querySelector('ul');\n            listEl.classList.remove('droppable');\n        }\n        configure() {\n            this.element.addEventListener('dragover', this.dragOverHandler);\n            this.element.addEventListener('dragleave', this.dragLeaveHandler);\n            this.element.addEventListener('drop', this.dropHandler);\n            project_state_1.projectState.addListener((projects) => {\n                const relevantProjects = projects.filter(prj => {\n                    if (this.type === 'active') {\n                        return prj.status === project_1.ProjectStatus.Active;\n                    }\n                    return prj.status === project_1.ProjectStatus.Finished;\n                });\n                this.assignedProjects = relevantProjects;\n                this.renderProjects();\n            });\n        }\n        renderContent() {\n            const listId = `${this.type}-projects-list`;\n            this.element.querySelector('ul').id = listId;\n            this.element.querySelector('h2').textContent =\n                this.type.toUpperCase() + ' Projects';\n        }\n        renderProjects() {\n            const listEl = document.getElementById(`${this.type}-projects-list`);\n            listEl.innerHTML = '';\n            for (const prjItem of this.assignedProjects) {\n                new project_item_1.ProjectItem(this.element.querySelector('ul').id, prjItem);\n            }\n        }\n    }\n    exports.ProjectList = ProjectList;\n    __decorate([\n        autobind_1.Autobind\n    ], ProjectList.prototype, \"dragOverHandler\", null);\n    __decorate([\n        autobind_1.Autobind\n    ], ProjectList.prototype, \"dropHandler\", null);\n    __decorate([\n        autobind_1.Autobind\n    ], ProjectList.prototype, \"dragLeaveHandler\", null);\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://dragg-drop-app/./src/components/project-list.ts?");

/***/ }),

/***/ "./src/decorators/autobind.ts":
/*!************************************!*\
  !*** ./src/decorators/autobind.ts ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.Autobind = void 0;\n    function Autobind(_, _2, descriptor) {\n        const originalMethod = descriptor.value;\n        const adjDescriptor = {\n            configurable: true,\n            get() {\n                const boundFn = originalMethod.bind(this);\n                return boundFn;\n            }\n        };\n        return adjDescriptor;\n    }\n    exports.Autobind = Autobind;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://dragg-drop-app/./src/decorators/autobind.ts?");

/***/ }),

/***/ "./src/models/project.ts":
/*!*******************************!*\
  !*** ./src/models/project.ts ***!
  \*******************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.Project = exports.ProjectStatus = void 0;\n    var ProjectStatus;\n    (function (ProjectStatus) {\n        ProjectStatus[ProjectStatus[\"Active\"] = 0] = \"Active\";\n        ProjectStatus[ProjectStatus[\"Finished\"] = 1] = \"Finished\";\n    })(ProjectStatus || (exports.ProjectStatus = ProjectStatus = {}));\n    class Project {\n        constructor(id, title, description, people, status) {\n            this.id = id;\n            this.title = title;\n            this.description = description;\n            this.people = people;\n            this.status = status;\n        }\n    }\n    exports.Project = Project;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://dragg-drop-app/./src/models/project.ts?");

/***/ }),

/***/ "./src/state/project-state.ts":
/*!************************************!*\
  !*** ./src/state/project-state.ts ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../models/project */ \"./src/models/project.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, project_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.projectState = exports.ProjectState = void 0;\n    class State {\n        constructor() {\n            this.listeners = [];\n        }\n        addListener(listenerFn) {\n            this.listeners.push(listenerFn);\n        }\n    }\n    class ProjectState extends State {\n        constructor() {\n            super();\n            this.projects = [];\n        }\n        static getInstance() {\n            if (this.instance) {\n                return this.instance;\n            }\n            this.instance = new ProjectState();\n            return this.instance;\n        }\n        addProject(title, description, numOfPeople) {\n            const newProject = new project_1.Project(Math.random().toString(), title, description, numOfPeople, project_1.ProjectStatus.Active);\n            this.projects.push(newProject);\n            this.updateListeners();\n        }\n        moveProject(projectId, newStatus) {\n            const project = this.projects.find(prj => prj.id === projectId);\n            if (project && project.status !== newStatus) {\n                project.status = newStatus;\n            }\n            this.updateListeners();\n        }\n        updateListeners() {\n            for (const listenerFn of this.listeners) {\n                listenerFn(this.projects.slice());\n            }\n        }\n    }\n    exports.ProjectState = ProjectState;\n    exports.projectState = ProjectState.getInstance();\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://dragg-drop-app/./src/state/project-state.ts?");

/***/ }),

/***/ "./src/util/validation.ts":
/*!********************************!*\
  !*** ./src/util/validation.ts ***!
  \********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.validate = void 0;\n    function validate(validatableInput) {\n        let isValid = true;\n        if (validatableInput.required) {\n            isValid = isValid && validatableInput.toString().trim().length !== 0;\n        }\n        if (validatableInput.minLength != null && typeof validatableInput.value === \"string\") {\n            isValid = isValid && validatableInput.value.length > validatableInput.minLength;\n        }\n        if (validatableInput.maxLength != null && typeof validatableInput.value === \"string\") {\n            isValid = isValid && validatableInput.value.length < validatableInput.maxLength;\n        }\n        if (validatableInput.min != null && typeof validatableInput.value === \"number\") {\n            isValid = isValid && validatableInput.value > validatableInput.min;\n        }\n        if (validatableInput.max != null && typeof validatableInput.value === \"number\") {\n            isValid = isValid && validatableInput.value < validatableInput.max;\n        }\n        return isValid;\n    }\n    exports.validate = validate;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://dragg-drop-app/./src/util/validation.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;