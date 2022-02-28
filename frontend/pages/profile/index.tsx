import React from "react";
import FullProfile from "../../components/profile/FullProfile";
import Card from "../../UI/Card";

const Profile = () => {
  const onPostingDataHandler = async (data: {
    title: string,
    description: string,
    date: string,
    text: string,
  }) => {
    try {
      const response = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Not able to POST data");
      }

      const responseData = await response.json();
      console.log(responseData);

      // can use router here -------------------->>>>>>>
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      {/* <YourProfile onPostingData={onPostingDataHandler} /> */}
      <FullProfile/>
    </>
  );
};

export default Profile;
