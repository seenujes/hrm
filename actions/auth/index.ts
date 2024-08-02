import { signInWithEmailAndPassword ,createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import {db,auth} from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDoc } from "firebase/firestore";