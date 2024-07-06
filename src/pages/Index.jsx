import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Project, Task, Settings, User } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Welcome to OpenDevin</h1>
        <p className="text-lg text-muted-foreground">
          Your one-stop solution for project management.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Completed Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">34</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">8</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">5</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Recent Activities</h2>
        <div className="space-y-4">
          <Card>
            <CardContent>
              <p>John Doe completed the task "Design Homepage".</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p>Jane Smith created a new project "Marketing Campaign".</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex space-x-4">
        <Button>Create New Project</Button>
        <Button variant="outline">Add Task</Button>
      </section>
    </div>
  );
};

export default Index;