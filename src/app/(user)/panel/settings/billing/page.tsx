import { Button } from "@/src/components/ui/Button";
import CreditCardMock from "./components/CreditCardMock";

export default function Billing() {
  //TODO: Add api handler
  return (
    <div>
      <h2 className="text-xl font-bold text-black mb-6">
        Billing & Subscription
      </h2>
      <div className="space-y-6">
        <div className="p-6 bg-linear-to-br from-primary to-auxiliar rounded-xl text-white">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-white/80 text-sm">Current Plan</p>
              <h3 className="text-white text-2xl font-bold">Pro Plan</h3>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-white">$99</p>
              <p className="text-white/80 text-sm">per month</p>
            </div>
          </div>
          <p className="text-white/90 mb-3">
            Next billing date: December 1, 2025
          </p>
          <Button
            variant="outline"
            className="bg-white text-primary hover:bg-gray-100 border-white"
          >
            Manage Subscription
          </Button>
        </div>

        <div>
          <h3 className="font-bold text-black mb-3">Payment Method</h3>
          <div className="p-3 border border-gray-200 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* TODO: Validar cartao, senao mandar unknow. Pegar da interface do creditcardmock */}
              <CreditCardMock cardBrand="visa" />
              <div>
                <p className="font-medium text-black">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-600">Expires 12/25</p>
              </div>
            </div>
            <Button variant="outline">Update</Button>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-black mb-3">Billing History</h3>
          <div className="space-y-3">
            {[
              {
                date: "Nov 1, 2025",
                amount: "$99.00",
                status: "Paid",
              },
              {
                date: "Oct 1, 2025",
                amount: "$99.00",
                status: "Paid",
              },
              {
                date: "Sep 1, 2025",
                amount: "$99.00",
                status: "Paid",
              },
            ].map((invoice, index) => (
              <div
                key={index}
                className="p-3 border border-gray-200 rounded-lg flex items-center justify-between"
              >
                <div>
                  <p className="font-medium text-black">{invoice.date}</p>
                  <p className="text-sm text-gray-600">{invoice.amount}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                    {invoice.status}
                  </span>
                  <button className="text-primary hover:underline text-sm">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
