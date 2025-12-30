"use client";

import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { useAuthStore } from "@/src/store/Auth";
import { useEffect, useState } from "react";
import {
  getUserInitials,
  isDifferentData,
  ProfileFormScheme,
  ProfileFormType,
} from "./helper";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Profile() {
  const { user } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormType>({
    resolver: zodResolver(ProfileFormScheme),
  });
  const [userInitials, setUserInitials] = useState<string>();

  useEffect(() => {
    if (user?.full_name) {
      const initials = getUserInitials(user?.full_name);
      setUserInitials(initials);
    }
  }, [user]);

  const onSubmit: SubmitHandler<ProfileFormType> = (data) => {
    if (!user) return;
    let isChanged = isDifferentData(user, data);
    if (!isChanged) return;
    console.log("Send to API");
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-dark mb-6">Profile Settings</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 bg-linear-to-br from-primary to-auxiliar rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {userInitials}
          </div>
          <div>
            <h3 className="font-bold text-gray-500">{user?.company}</h3>
          </div>
        </div>

        <Input
          type="text"
          label="Full Name"
          defaultValue={user?.full_name}
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          type="email"
          label="Email Address"
          defaultValue={user?.email}
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          type="text"
          label="Company Name"
          placeholder="Your company name"
          defaultValue={user?.company}
          error={errors.company?.message}
          {...register("company")}
        />

        <div className="flex gap-3 pt-3">
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </form>
    </div>
  );
}
