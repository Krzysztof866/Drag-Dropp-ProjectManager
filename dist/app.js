define(["require", "exports", "./components/project-input", "./components/project-list"], function (require, exports, project_input_1, project_list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    new project_input_1.ProjectInput();
    new project_list_1.ProjectList('active');
    new project_list_1.ProjectList('finished');
});
//# sourceMappingURL=app.js.map