import Model from '@/packages/server/base/Model';

export interface ProjectFields<T = string | number> {
  readonly _id?: T;
  projectName: string;
  projectDescription: string;
  // ...
}

class MProject extends Model<ProjectFields> {
  protected collectionName = 'projects';
}

const ProjectModel = new MProject();

export default ProjectModel;
