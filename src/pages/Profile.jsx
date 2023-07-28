import React from "react";

const UserInfoCard = React.lazy(() =>
  import("../components/Profile/UserInfoCard")
);
const EditInfoTab = React.lazy(() =>
  import("../components/Profile/EditInfoTab")
);

const Profile = () => {
  return (
    <div className="py-12">
      <div className="w-full">
        <UserInfoCard />
      </div>
      <div className="w-full mt-16">
        <EditInfoTab />
      </div>
    </div>
  );
};

export default Profile;
