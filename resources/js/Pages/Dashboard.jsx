import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import HomePage from "@/Components/contentCurdPage"
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    // let [] = 
    return (
        <AuthenticatedLayout
            header={
                <div className=' flex justify-between items-center ' >
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Dashboard
                    </h2>
                    <div className=" text-gray-900 dark:text-gray-100">
                        You're logged in!
                    </div>
                </div>
            }
        >
            <Head title="Dashboard" />
            <div className=" bg-[#fff] py-4 !h-[100%] ">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-2">
                    <HomePage />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
