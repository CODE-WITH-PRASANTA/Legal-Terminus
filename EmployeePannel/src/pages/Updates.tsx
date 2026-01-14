import React from "react";

const Updates: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recent Updates</h2>

      <ul className="space-y-3 text-gray-700">
        <li>🔄 System refresh completed successfully</li>
        <li>🛠 Task module improvements deployed</li>
        <li>💬 Messaging performance optimized</li>
        <li>📊 Dashboard data synced</li>
      </ul>
    </div>
  );
};

export default Updates;
