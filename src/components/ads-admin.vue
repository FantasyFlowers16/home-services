<template>
  <div class="b-ads">
    <div class="b-ads-moderate"  >
      <div class="b-ads-moderate-container"   v-for="item in adsLists" :key="item.id">
        <div class="b-ads__container" v-if="item.moderate">
          <div class="b-ads__delete" @click="deleteAds(item.id,item.title,item.text,item.warn,item.moderate)">Удалить объявление</div>
          <div class="b-ads__title">{{item.title}}</div>
          <div class="b-ads__text">{{item.text}}</div>
        </div>
      </div>
    </div>
    <div class="b-ads-no-moderate" >
      <div class="b-ads-no-moderate-container"  v-for="item in adsLists" :key="item.id">
        <div class="b-ads__container2" v-if="!item.moderate">
          <div class="b-ads__title">{{item.title}}</div>
          <div class="b-ads__text">{{item.text}}</div>
          <div class="b-ads__but-container">
            <button class="button green" @click="agree(item.id,item.title,item.text,item.isWarn)">Одобрить</button>
            <button class="button red" @click="disagree(item.id,item.title,item.text,item.isWarn)">Отклонить</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import db from "@/components/firebaseinit";
// eslint-disable-next-line no-unused-vars
import firebase from "firebase";


export default {
  components: {
  },
  data() {
    return {

      adsLists:[]
    };
  },
  name: "admin",
  methods:{
    deleteAds(id,title,text,warn,moderate){
      var adsListItem = db.collection("ads").doc("olH7NHHUrWOJP35mk88b");
      const newAds={id:id,title:title,text:text,moderate:moderate,warn:warn}
      console.log(newAds)
      return adsListItem.update({
        adsList: firebase.firestore.FieldValue.arrayRemove(newAds)

      })
          .then(() => {
            console.log("Document successfully updated!");
            this.adsLists.splice(id, 1);
            this.OpenModal()
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
    },
    agree(id,title,text,warn,moderate){
      var adsListItem = db.collection("ads").doc("olH7NHHUrWOJP35mk88b");
      const newAds={id:id,title:title,text:text,moderate:true,isWarn:warn}
      // const newAds2={id:id,title:title,text:text,moderate:moderate,warn:warn}
      console.log(newAds)
      return adsListItem.update({
        adsList: firebase.firestore.FieldValue.arrayUnion(newAds)
      })
          .then(() => {
            console.log("Document successfully updated!");
            this.adsLists.splice(id, 1);
            this.disagree(id,title,text,warn,moderate)
            this.OpenModal()
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
    },
    disagree(id,title,text,moderate,warn){
      var adsListItem = db.collection("ads").doc("olH7NHHUrWOJP35mk88b");
      const newAds={id:id,title:title,text:text,moderate:moderate,isWarn:warn}
      console.log(newAds)
      return adsListItem.update({
        adsList: firebase.firestore.FieldValue.arrayRemove(newAds)

      })
          .then(() => {
            console.log("Document successfully updated!");
            this.adsLists.splice(id, 1);
            this.OpenModal()
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
            warn:item.warn,
            moderate:item.moderate,
          }
          this.adsLists.push(data)
        })
      })
    })

  },
};
</script>

<style lang="sass">


.b-ads
  display: flex
  &__but-container
    display: flex
  &-moderate
    width: 50%
  &-no-moderate
    width: 50%
  &__container
    margin: 10px
    padding: 15px
    border: 1px solid grey
    border-radius: 10px
    position: relative
  &__container2
    background: #f99797
    border: 1px solid grey
    border-radius: 10px
    padding: 15px
    margin: 10px
  &__delete
    position: absolute
    top: 10px
    right: 10px
    cursor: pointer
    padding: 5px
    border: 1px solid
    border-radius: 5px

.button
  box-sizing: border-box
  &.green
    color: white
    background: green
    min-width: 40%
    margin: 10px
  &.red
    color: white
    background: darkred
    min-width: 40%
    margin: 10px
</style>