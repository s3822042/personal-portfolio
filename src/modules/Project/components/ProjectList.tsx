import ProjectModel from '@/modules/Project/services/Project.model';

async function ProjectList() {
  const projects = await ProjectModel.all();
  return (
    <div className="w-full max-w-[500px] rounded bg-gray-800 p-2">
      <p className="mb-5 px-5 text-center text-sm text-slate-400">
        Here&apos;s the data returned directly from the Database.
      </p>
      <code className="mb-16 max-w-[380px] text-center text-slate-300">
        {JSON.stringify(projects, null, 2)}
      </code>
    </div>
  );
}

export default ProjectModel;
