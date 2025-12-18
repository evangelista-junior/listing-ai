import { Button } from "@/src/components/ui/Button";
import { RadioButton } from "@/src/components/ui/RadioButton";

export default function Notifications() {
  //TODO: Add saving preferences api call
  return (
    <div>
      <h2 className="text-xl font-bold text-black mb-6">
        Notification Preferences
      </h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <p className="font-medium text-black">Email Notifications</p>
            <p className="text-sm text-gray-600">
              Receive email updates about your listings
            </p>
          </div>
          <RadioButton />
        </div>

        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <p className="font-medium text-black">Sales Alerts</p>
            <p className="text-sm text-gray-600">
              Get notified when you make a sale
            </p>
          </div>

          <RadioButton />
        </div>

        <div className="pt-3">
          <Button variant="primary">Save Preferences</Button>
        </div>
      </div>
    </div>
  );
}
