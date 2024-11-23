import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <MainLayout>
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-5xl mx-auto space-y-6 sm:px-6 lg:px-8">
                    <div className="p-4 bg-white border border-black shadow-3xl sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 bg-white border border-black shadow-3xl sm:rounded-lg sm:p-8">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 bg-white border border-black shadow-3xl sm:rounded-lg sm:p-8">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
