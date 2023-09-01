/** @format */

import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Wrap,
  useToast,
} from '@chakra-ui/react';
import React, {  } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/actions/user.actions';
import { AppDispatch } from '../../redux/store';

interface Props {
  isOpen: boolean;
  onClose: () => void
}

export default function PaymentsSuccessModal({ isOpen, onClose }: Props) {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const toast = useToast();
  const logoutHandler = () => {
    dispatch(logout());
    toast({ description: 'You have been logged out.', status: 'success', isClosable: true });
    navigate('/products');
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Wrap justify={'center'} direction={'column'} align={'center'} mt={'20px'}>
              <Alert
                status="success"
                variant={'subtle'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                textAlign={'center'}
                height={'auto'}
              >
                <AlertIcon boxSize={'55px'} />
                <AlertTitle pt={'8px'} fontSize={'xl'}>
                  Pago exitosa!
                </AlertTitle>
                <Stack mt={'20px'} minW={'200px'}>
                  <Button
                    colorScheme="teal"
                    variant={'outline'}
                    as={RouterLink}
                    to={'/your-orders'}
                  >
                    Tus ordenes
                  </Button>
                  <Button colorScheme="teal" variant={'outline'} as={RouterLink} to={'/products'}>
                    Productos
                  </Button>
                  <Button colorScheme="teal" variant={'outline'} onClick={logoutHandler}>
                    Cerrar Sesión
                  </Button>
                </Stack>
              </Alert>
            </Wrap>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
