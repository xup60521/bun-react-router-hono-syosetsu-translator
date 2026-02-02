import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";

import HistoryClientPage from "./-historyClient";
import { historyQuery } from "@/data/historyQuery";
import { authClient } from "@/lib/auth-client";
import { Link } from "react-router-dom";



export default function HistoryPage() {
    const { data: session, isPending } = authClient.useSession()

    if (isPending) {
        return <div>Loading...</div>
    }

    if (!session?.session) {
        return <UnauthorizedPage />;
    }

    return <HistoryClientPage />;
}

function UnauthorizedPage(): React.JSX.Element {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Access Denied</h1>
                <p className="text-muted-foreground">
                    You need to connect a Google Drive account to access your
                    history.
                </p>
            </div>
            {/* 
          In TanStack Router, it's better to use the 'asChild' pattern 
          or pass the component to the 'Link' to maintain proper routing. 
      */}
            <Link to="/settings">
                <Button>
                    Go to Settings
                </Button>
            </Link>
        </div>
    );
}
