import { ContentLayout } from '@/components/Layout';

export const Dashboard = () => {
  return (
    <ContentLayout title="Dashboard">
      <h1 className="text-xl mt-2">
        Welcome
      </h1>
      <p className="font-medium">In this application you can:</p>
      {(
        <ul className="my-4 list-inside list-disc">
          <li>check my info</li>
          <li>play my mini personal projects</li>
        </ul>
      )}
    </ContentLayout>
  );
};
