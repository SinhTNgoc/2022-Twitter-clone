import { data } from "autoprefixer";
import Moment from "react-moment";
const Comment = ({ comment }) => {

  return (
    <div className="mt-4 p-4">
      <div className="flex items-center space-x-2 mb-2">
        <img
          src={comment?.data()?.userImg}
          alt="user-image"
          className="w-[48px] h-[48px] rounded-full object-cover"
        />
        <span>{comment?.data()?.name}</span>
        <span>@{comment?.data()?.username} - </span>
        <Moment fromNow>{comment?.data()?.timestamp?.toDate()}</Moment>
      </div>
      <p className="ml-12">{comment?.data()?.comment}</p>
    </div>
  );
};

export default Comment;
