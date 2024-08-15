"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  collection,
  deleteDoc,
  Firestore,
  getDoc,
  getDocs,
  query,
  setDoc,
  docRef,
  doc
} from "firebase/firestore"
import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material"
import { firestore } from "@/firebase"
import { Mrs_Saint_Delafield } from "next/font/google"

export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState("")

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, "inventory"))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc) => {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      })
    })
    setInventory(inventoryList)
    console.log(inventoryList)
  }

  useEffect(() => {
    updateInventory()
  }, [])


  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const { quantity } = docSnap.data()
      await setDoc(docRef, { quantity: quantity + 1 })
    } else {
      await setDoc(docRef, { quantity: 1 })
    }
    await updateInventory()
  }
  
  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const { quantity } = docSnap.data()
      if (quantity === 1) {
        await deleteDoc(docRef)
      } else {
        await setDoc(docRef, { quantity: quantity - 1 })
      }
    }
    await updateInventory()
  }

  // const addItem = async (item) => {
  //   const docRef = doc (collection(firestore, 'inventory'), item)
  //   const docSnap = await getDoc(docRef)
  //   if(docSnap.exists()){
  //     const {quantity} = docSnap.data()
  //     await setDoc(docRef,{quantity:quantity + 1})
      
  //   }
  //   else {
  //     await setDoc(docRef,{quantity:1})
  //   }
  //   await updateInventory()
  // }


  // const removeItem = async (item) => {
  //   const docRef = doc (collection(firestore, 'inventory'), item)
  //   const docSnap = await getDoc(docRef)
  //   if(docSnap.exists()){
  //     const {quantity} = docSnap.data()
  //     if (quantity === 1){
  //       await deleteDoc(docRef)
  //     }
  //     else {
  //       await setDoc(docRef,{quantity:quantity - 1})
  //     }
  //   }
  //   await updateInventory()
  // }
  
  

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  
  return (

    <Box width="100vw"
    height="100vh"
    display="flex"
    flexDirection={'column'}
    justifyContent="center"
    alignItems="center"
    bgcolor={'#fff1e1'}
    gap={2}
    >
      <Modal open={open} onClose={handleClose}>
        
        <Box 
        position="absolute" 
        top="50%" 
        left= "50%"
        width={400}
        bgcolor="white"
        border="2px solid #000"
        boxShadow={24}
        p={4}
        display="flex"
        justifyContent={"center"}
        alignContent={'center'}
        flexDirection="column"
        gap={3} 
        sx={{
          transform: 'translate (-50%, -50%)'
        }}>

          <Typography variant="h6">Add Item</Typography>
          
          <Stack width="100%" direction="row" spacing={2}>
            <TextField
            variant="outlined"
            fullWidth
            value={itemName}
            onChange={(e)=>{
              setItemName(e.target.value)
            }}></TextField>

            <Button
            variant="contained"
            onClick={()=> {
              addItem(itemName)
              setItemName('')
              handleClose()
            }}>
              ADD
            </Button>
          </Stack>

        </Box>

      </Modal>

      <Button
      variant="contained"
      onClick={()=>{
        handleOpen()
      }}>
        ADD NEW ITEM
      </Button>
    
      <Box border={'2px solid #ffc13b'}>
        
        <Box
        width={'800px'}
        height="100px"
        bgcolor={'#26495c'}>

          <Typography variant="h2" 
          color={"#ff9a8d"}
          display={'flex'}
          alignItems={'center'} 
          justifyContent={'center'}>
            INVENTORY ITEMS
          </Typography>
        </Box>
      
      


      <Stack width="800px" height="300px" spacing={2} overflow={'auto'}>
        {inventory.map(({name, quantity}) => (
          <Box
            key={name}
            width="100%"
            minHeight="150px"
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            bgcolor={'#e7e8d1'}
            paddingX={5}
          >
            <Typography variant={'h4'} color={'#333'} textAlign={'center'}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Typography>
            <Typography variant={'h4'} color={'#333'} textAlign={'center'}>
              Quantity: {quantity}
            </Typography>

            <Stack direction={'row'} spacing={2}>
            <Button variant="contained" onClick={() => addItem(name)}>
              ADD
            </Button>


            <Button variant="contained" onClick={() => removeItem(name)}>
              REMOVE
            </Button>

            </Stack>
          </Box>
        ))}
      </Stack>
      

    </Box>
  </Box>
  
  )
}
