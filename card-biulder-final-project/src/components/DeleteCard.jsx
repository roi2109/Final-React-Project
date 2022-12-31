import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCard } from "../services/CardService";
import { toast } from "react-toastify";
const DeleteCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) return;
    const remove = async () => {
      await deleteCard(id);
      toast("Your Card Was Deleted");
      navigate("/my-cards");
    };
    remove();
  }, []);
};

export default DeleteCard;
