<template>
  <div class="b-admin-item">
    <div class="b-admin-item-moderate"  >
      <div class="b-admin-item-moderate-container"   v-for="item in adsListItem" :key="item.id">
        <div class="b-admin-item__container" v-if="item.moderate">
          <div class="b-admin-item__delete" @click="deleteAds(item.id,item.title,item.text,item.isWarn,item.moderate)">Удалить объявление</div>
          <div class="b-admin-item__title">{{item.title}}</div>
          <div class="b-admin-item__text">{{item.text}}</div>
        </div>
      </div>
    </div>
    <div class="b-admin-item-no-moderate" >
      <div class="b-admin-item-no-moderate-container"  v-for="item in adsListItem" :key="item.id">
        <div class="b-admin-item__container2" v-if="!item.moderate">
          <div class="b-admin-item__title">{{item.title}}</div>
          <div class="b-admin-item__text">{{item.text}}</div>
          <div class="b-admin-item__but-container">
            <button class="button green" @click="agree(item.id,item.title,item.text,item.isWarn)">Одобрить</button>
            <button class="button red" @click="disagree(item.id,item.title,item.text,item.isWarn)">Отклонить</button>
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
      adsListItem:[],
      openModal:false
    };
  },
  name: "admin",
  methods:{
    deleteAds(id,title,text,warn,moderate){
      let adsListItem = db.collection("ads").doc("olH7NHHUrWOJP35mk88b");
      const newAds={id:id,title:title,text:text,moderate:moderate,isWarn:warn}
      console.log(newAds)
      return adsListItem.update({
        adsList: firebase.firestore.FieldValue.arrayRemove(newAds)

      })
          .then(() => {
            console.log("Document successfully updated!");
            this.adsListItem.splice(id, 1);
            // this.OpenModal()
            this.adsListItem = this.adsListItem.filter((item) => item.id !== id );
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
    },
    agree(id,title,text,warn){
      var adsListItem = db.collection("ads").doc("olH7NHHUrWOJP35mk88b");
      const newAds={id:id,title:title,text:text,moderate:true,isWarn:warn}
      // const newAds2={id:id,title:title,text:text,moderate:moderate,warn:warn}
      const data={
        id:id,
        title:title,
        text:text,
        isWarn:warn,
        moderate:true,
      }
      return adsListItem.update({
        adsList: firebase.firestore.FieldValue.arrayUnion(newAds)
      })
          .then(() => {
            console.log("Document successfully updated!");
            // console.log(this.adsListItem[id])
            // this.adsListItem.push(data)
            // // this.adsListItem = this.adsListItem.filter((item) => item.id !== id && item.moderate !== false);
            this.disagree(id,title,text,warn,false)
            this.adsListItem.push(data)
            this.OpenModal=true

          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
    },
    disagree(id,title,text,warn,moderate=false){
      console.log(moderate)
      var adsListItem = db.collection("ads").doc("olH7NHHUrWOJP35mk88b");
      const deleteAds={id:id,title:title,text:text,moderate:moderate,isWarn:warn}
      console.log(deleteAds)

      return adsListItem.update({
        adsList: firebase.firestore.FieldValue.arrayRemove(deleteAds)

      })
          .then(() => {
            console.log("Document successfully updated!");
            console.log(this.adsListItem)

            this.adsListItem = this.adsListItem.filter((item) => item.id !== id || item.moderate !== false);
            // this.OpenModal()
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
    }
  },
  created() {
    db.collection('ads').get().then
    (querySnapshot=>{
      querySnapshot.forEach(doc=>{

        // console.log(doc.data().adsList)
        doc.data().adsList.forEach(item=>{

          // eslint-disable-next-line no-unused-vars
          const data={
            id:item.id,
            title:item.title,
            text:item.text,
            isWarn:item.isWarn,
            moderate:item.moderate,
          }
          this.adsListItem.push(data)
        })
      })
    })

  },
};
</script>

<style lang="sass">


.b-admin-item
  max-width: 1280px
  margin: 0 auto
  display: flex
  &__but-container
    display: flex
  &-moderate
    width: 50%
  &__title
    font-weight: bold
  &__text
    margin-top: 10px
  &-no-moderate
    width: 50%
  &__container
    margin: 10px
    padding: 15px
    border: 1px solid grey
    border-radius: 10px
    position: relative
  &__container2
    background: #f5b5b5
    border: 1px solid grey
    border-radius: 10px
    padding: 15px
    margin: 10px
  &__delete
    position: absolute
    box-shadow: 3px 3px 2px 0 rgb(0 0 0 / 35%)
    top: 10px
    right: 10px
    cursor: pointer
    padding: 5px
    background: #a72222
    border-radius: 5px
    color: white

.button
  box-sizing: border-box
  padding: 7px
  &.green
    color: white
    background: #4a924a
    min-width: 40%
    margin: 10px
  &.red
    color: white
    background: #a72222
    min-width: 40%
    margin: 10px
</style>