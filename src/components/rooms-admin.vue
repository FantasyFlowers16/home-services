<template>
  <div class="b-admin-item">
    <div class="b-admin-item-moderate" >
      <div class="b-admin-item-moderate-container"   v-for="item in roomsList" :key="item.id">
        <div class="b-admin-item__container" v-if="item.moderate">
          <div class="b-admin-item__delete" @click="deleteAds(item.id,item.title,item.description,item.address,item.price,item.metr, item.moderate)">Удалить</div>

          <div class="room-item__title">{{item.title}}</div>
          <div class="room-item__address">{{item.address}}</div>
          <div class="room-item__photo-container">
            <!--        <img src="../assets/rooms/photo.jpg" class="room-item__photo">-->
            <img :src=item.img class="room-item__photo">
          </div>
          <div class="room-item__price">{{item.price}}<span> рублей</span></div>
          <div class="room-item__price-metr">{{item.metr}}<span> м<sup>2</sup></span></div>
          <div class="room-item__description">{{item.description}}</div>
        </div>
      </div>
    </div>
    <div class="b-admin-item-no-moderate" >
      <div class="b-admin-item-no-moderate-container"  v-for="item in roomsList" :key="item.id">
        <div class="b-admin-item__container2" v-if="!item.moderate">
          <div class="room-item__title">{{item.title}}</div>
          <div class="room-item__address">{{item.address}}</div>
          <div class="room-item__photo-container">
            <img :src=item.img class="room-item__photo">
          </div>
          <div class="room-item__price">{{item.price}}<span> рублей</span></div>
          <div class="room-item__price-metr">{{item.metr}}<span> м<sup>2</sup></span></div>
          <div class="room-item__description">{{item.description}}</div>
          <div class="b-admin-item__but-container">
            <button class="button green" @click="agree(item.id,item.title,item.description,item.address,item.price,item.metr,item.img)">Одобрить</button>
            <button class="button red" @click="disagree(item.id,item.img,item.title,item.description,item.address,item.price,item.metr,item.floor,item.img)">Отклонить</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import db from "@/firebaseinit";
// eslint-disable-next-line no-unused-vars
import firebase from "firebase";


export default {
  components: {
  },
  data() {
    return {
      roomsList:[],
      openModal:false
    };
  },
  name: "rooms-admin",
  methods:{
    deleteAds(id,img,title,description,address,price,floor,metr){
      let adsListItem = db.collection("rooms").doc("BcPBB7lozTbXU6qiyJ1o");
      const deleteRoom={id:id,img:img,title:title,description:description,moderate:false,address:address,price:price,metr:metr,floor:floor}
      console.log(deleteRoom)
      return adsListItem.update({
        adsList: firebase.firestore.FieldValue.arrayRemove(deleteRoom)

      })
          .then(() => {
            console.log("Document successfully updated!");
            // this.roomsList.splice(id, 1);
            // this.OpenModal()
            this.adsListItem = this.roomsList.filter((item) => item.id !== id );
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
    },
    agree(id,title,description,address,price,metr){
      console.log(metr)
      let roomsListItem = db.collection("rooms").doc("BcPBB7lozTbXU6qiyJ1o");
      const newRoom={id:id,title:title,description:description,moderate:true,address:address,price:price,metr:metr,}
      // const newAds2={id:id,title:title,text:text,moderate:moderate,warn:warn}
      console.log(newRoom)
      const data={
        id:id,
        title:title,
        description:description,
        address:address,
        price:price,
        metr:metr,
        moderate:true,

      }
      return roomsListItem.update({
        rooms: firebase.firestore.FieldValue.arrayUnion(newRoom)
      })
          .then(() => {
            console.log("Document successfully updated!");
            // console.log(this.adsListItem[id])
            // this.adsListItem.push(data)
            // // this.adsListItem = this.adsListItem.filter((item) => item.id !== id && item.moderate !== false);
            this.disagree(id,title,description,address,price,metr)
            this.roomsList.push(data)
            this.OpenModal=true

          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
    },
    disagree(id,img,title,description,address,price,floor,metr){
      console.log(floor)
      let roomsListItem = db.collection("rooms").doc("BcPBB7lozTbXU6qiyJ1o");
      const deleteRoom={id:id,img:img,title:title,description:description,moderate:false,address:address,price:price,metr:metr,floor:floor}
      console.log(deleteRoom)

      return roomsListItem.update({
        rooms: firebase.firestore.FieldValue.arrayRemove(deleteRoom)

      })
          .then(() => {
            console.log("Document successfully updated!");
            this.roomsList = this.roomsList.filter((item) => item.id !== id || item.moderate !== false);
            // this.OpenModal()
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
    }
  },
  created() {
    db.collection('rooms').get().then
    (querySnapshot=>{
      querySnapshot.forEach(doc=>{

        // console.log(doc.data().adsList)
        doc.data().rooms.forEach(item=>{

          // eslint-disable-next-line no-unused-vars
          const data={
            address:item.address,
            description:item.description,
            moderate:item.moderate,
            floor:item.floor,
            id:item.id,
            img:item.img,
            metr:item.metr,
            price:item.price,
            title:item.title
          }
          this.roomsList.push(data)
        })
      })
    })

  },
};
</script>

<style scoped>

</style>