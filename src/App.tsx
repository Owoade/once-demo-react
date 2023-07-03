import * as React from "react";
import Once from "checkout-once";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  UnorderedList,
  ListItem,
  Button,
  List,
  Image,
  Alert,
  AlertIcon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";

const items = [
  {
    id: 1,
    name: "Samsung Laptop",
    price: 200000,
    _price: "200,000",
    image:
      "https://solaroidenergy.com/wp-content/uploads/2023/03/can-i-replace-laptop-with-ipad-pro.jpg",
  },
  {
    id: 2,
    name: "Iphone XR",
    price: 100000,
    _price: "100,000",
    image:
      "https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    price: 50000,
    _price: "50,000",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6373/6373460_sd.jpg",
  },
];

const totalAmount = items.reduce((sum, item) => sum + item.price, 0);

export const App = () => {
  const [loading, setLoading] = React.useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleSubmit() {
    setLoading(true);

    const once = new Once({
      amount: 35000000,
      successCallback: () => {
        setLoading(false);
        onOpen();
      },
    });

    once.checkout();
  }
  return (
    <ChakraProvider theme={theme}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thank you ☺</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Transaction Successful
              </AlertTitle>
              <AlertDescription maxWidth="sm">
              Thank you for your patronizing us. We are processing your order with care and look forward to delivering it soon.
              </AlertDescription>
            </Alert>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box p={4} maxW="400px" mx="auto">
        <Heading as="h1" size="xl" mb={6}>
          Your Cart
        </Heading>
        <List spacing={4} mb={6}>
          {items.map((item) => (
            <ListItem
              key={item.id}
              fontSize="lg"
              display="flex"
              alignItems="center"
            >
              <Image src={item.image} alt={item.name} boxSize="50px" mr={4} />
              <Box>
                {item.name} - ₦{item._price}
              </Box>
            </ListItem>
          ))}
        </List>
        <Box textAlign="right" fontWeight="bold" fontSize="xl" mb={6}>
          Total: ₦350,000
        </Box>
        <Button
          onClick={handleSubmit}
          isLoading={loading}
          colorScheme="teal"
          size="lg"
          w="100%"
        >
          Checkout
        </Button>
        <Alert borderRadius={"8px"} my={"2em"} status="warning">
          <AlertIcon />
          Ensure your browser doesn't block popups.
        </Alert>
      </Box>
    </ChakraProvider>
  );
};
