import { Icon } from "@chakra-ui/react";
import { MdDeleteOutline } from "react-icons/md";
import { useDisclosure } from "@chakra-ui/react";
import ConfirmDialog from "./ConfirmDialog";
import PropTypes from "prop-types";

function DeleteButton({ title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Icon
        as={MdDeleteOutline}
        onClick={onOpen}
        cursor='pointer'
        opacity={0.8}
        _hover={{ color: "teal.500", opacity: 1 }}
      />
      <ConfirmDialog title={title} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

DeleteButton.propTypes = {
  title: PropTypes.string,
};

export default DeleteButton;
