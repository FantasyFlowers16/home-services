<template>
  <div class="b-ads">
    <div class="b-ads-moderate"  >
      <div class="b-ads-moderate-container"   v-for="item in adsLists" :key="item.id">
        <div class="b-ads__container" v-if="item.moderate">
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
            <button class="button green" @click="agree(item.id)">Одобрить</button>
            <button class="button red" @click="disagree(item.id)">Отклонить</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import db from "@/components/firebaseinit";
import firebase from "firebase";
// import firebase from "firebase";


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
    agree(id){
      console.log(id)
    },
    disagree(){
      var washingtonRef = db.collection("ads").doc("olH7NHHUrWOJP35mk88b");
      const newAds={dark:667}
      return washingtonRef.update({
        0: firebase.firestore.FieldValue.arrayUnion(newAds)

      })
          .then(() => {
            console.log("Document successfully updated!");
            this.OpenModal()
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });


      // db.collection("ads").doc("olH7NHHUrWOJP35mk88b").update({
      //   red: [
      //    id:{gren:234}
      //   ]
      // }).then(function() {
      //   console.log("Frank food updated");
      // });

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
  &__container2
    background: #f99797
    border: 1px solid grey
    border-radius: 10px
    padding: 15px
    margin: 10px
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