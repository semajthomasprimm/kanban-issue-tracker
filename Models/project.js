var db = require('../database');
require('dotenv').config();

module.exports = class Project{

    constructor(project_title) {
        this.project_title = project_title;
    }

    static getProject() {
        return db.query("SELECT * FROM project WHERE id = $1", [id]);
    }

    static getProjects() {
        return db.query("SELECT * FROM projects,");
    }

    static updateProject(project) {
        return db.query("UPDATE project SET project_title = $1 WHERE id = $2", [project.project_title, project.id]);
    }

    static createProject(project) {
        return db.query("INSERT INTO project (project_title) values ($1) RETURNING *", [project.project_title]);
    }

    static deleteProject(id) {
        return db.query('DELETE FROM project where id =  $1', [id]);
    }
}