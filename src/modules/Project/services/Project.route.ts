import ProjectController from '@/modules/Project/services/Project.controller';
import withVerifyAppKey from '@/packages/server/middlewares/withVerifyAppKey';

export const GET = ProjectController.index;
export const POST = withVerifyAppKey(ProjectController.insert);
