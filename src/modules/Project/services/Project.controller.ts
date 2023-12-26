import ProjectModel from '@/modules/Project/services/Project.model';
import Controller from '@/packages/server/base/Controller';

class CProject extends Controller {

  public index = async() => {
    try {
      const payload = await ProjectModel.all();
      return this.sendJSON({
        code: 200,
        message: 'Success get all projects.',
        payload
      });
    } catch (err) {
      return this.handleError(err);
    }
  };

  public insert = async(req: Request) => {
    try {
      const body = await req.json();
      const { projectName, projectDescription } = body;
      const errors: string[] = [];
      if (!projectName) errors.push('field "project name" is required.');
      if (!projectDescription) errors.push('field "project description" is required.');
      if (errors.length) return this.setError(400, errors, 'Validation error.');
      const payload = await ProjectModel.insert({ projectName, projectDescription });
      return this.sendJSON({
        code: 201,
        message: 'Success add new Project.',
        payload
      });
    } catch (err) {
      return this.handleError(err);
    }
  };
}

const ProjectController = new CProject();

export default ProjectController;
