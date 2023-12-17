<template>
  <div class="border-4 border-black p-6 bg-white rounded w-full">
    <h1 class="mb-4 text-2xl font-black">Firebase Options API</h1>
    <button
      type="button"
      class="
        bg-lime-200
        px-6
        py-2
        border-2 border-b-4 border-black
        mb-4
        rounded
        uppercase
        hover:bg-lime-300
        transition
      "
      @click="createDocument"
    >
      Add
    </button>

    <table class="table-auto w-full text-left">
      <thead
        class="
          text-xs text-gray-700
          uppercase
          bg-gray-50
          dark:bg-gray-700 dark:text-gray-400
        "
      >
        <tr>
          <th scope="col" class="px-6 py-3">Number</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doc in documents" :key="doc.id">
          <td class="px-6 py-4 font-bold text-xl">
            {{ doc.num }}
          </td>
          <td class="px-6 py-4">
            <button
              type="button"
              class="
                bg-cyan-200
                px-6
                py-2
                border-2 border-b-4 border-black
                rounded
                uppercase
                hover:bg-cyan-300
                transition
                mr-4
              "
              @click="updateDocument(doc.id)"
            >
              Update
            </button>
            <button
              type="button"
              class="
                bg-red-200
                px-6
                py-2
                border-2 border-b-4 border-black
                rounded
                uppercase
                hover:bg-red-300
                transition
              "
              @click="deleteDocument(doc.id)"
            >
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { db, numbersRef } from '@/firebase';

export default {
  data() {
    return {
      documents: [],
    };
  },
  methods: {
    async createDocument() {
      try {
        const newDocument = { num: Math.round(Math.random() * 100) };
        await addDoc(numbersRef, newDocument);
      } catch (error) {
        console.error('Error adding document:', error);
      }
    },
    async updateDocument(id) {
      const newDocument = { num: Math.round(Math.random() * 100) };
      const docRef = doc(db, 'numbers', id);

      await updateDoc(docRef, newDocument);
    },
    async deleteDocument(id) {
      await deleteDoc(doc(db, 'numbers', id));
    },
  },
  firestore: {
    documents: numbersRef,
  },
};
</script>
