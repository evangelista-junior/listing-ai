import { Button } from "@/src/components/ui/Button";

export default function Security() {
  //TODO: Add logic here
  return (
    <div>
      <h2 className="text-xl font-bold text-black mb-6">Security Settings</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-black mb-3">Change Password</h3>
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Current Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                New Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="••••••••"
              />
            </div>
            <Button variant="primary">Update Password</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
