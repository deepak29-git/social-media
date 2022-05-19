import { unfollowUserApi } from "../../all-api/follow-unfollow-api"
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"

export const UnfollowModal=({isOpen,onClose,_id})=>{
    const dispatch=useDispatch()
    const {followUserName}=useSelector((state)=>state.user)
  return(
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Unfollow {followUserName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
            <Box>Do you want to unfollow <Box as="span" fontWeight="bold">{followUserName}</Box></Box>
        </ModalBody>
        <ModalFooter>
          <Button onClick={()=>{
              unfollowUserApi(_id,dispatch)
              onClose()
              }} colorScheme='teal' mr={3}>
            unfollow
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}