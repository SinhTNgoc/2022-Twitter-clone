import { useRecoilState } from "recoil";
import { modalState } from "../Atom/modalAtom";

const CommentModal = () => {
  const [open, setOpen] = useRecoilState(modalState);

  return <div>
  <h1>Show comment modal</h1>
  {open && <h1>Modal is open</h1>}
  </div>;
};

export default CommentModal;
