<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal-news">
        <section class="modal-body">
          <button
              type="button"
              class="btn-close"
              @click="close"
          >
            x
          </button>
          <slot name="body">
            <div class="body__title">Ваша заявка отправлена</div>
          </slot>
          <div class="modal__icon"></div>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "ModalPage",
  methods: {
    close() {
      this.$emit('close');
    },
  },
  props:['news']
}
</script>

<style lang="sass"  scoped>
.modal-backdrop
  z-index: 11
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background-color: rgba(0, 0, 0, 0.3)
  display: flex
  justify-content: center
  align-items: center
  opacity: 1

.modal
  &__icon
    position: absolute
    background: url("../assets/svg/success.svg")
    width: 66px
    height: 66px
    top: 50%
    left: calc(50% - 33px)
    background-size: cover
.modal-news
  position: relative
  width: 80%
  height: 200px
  background: #FFFFFF
  box-shadow: 2px 2px 20px 1px
  overflow-x: auto
  display: flex
  flex-direction: column
  border-radius:  20px


.modal-header
  padding: 15px
  display: flex
  font-size: 20px
  font-weight: bold


.modal-header
  border-bottom: 1px solid #eeeeee
  color: #4AAE9B
  justify-content: space-between

.modal-fade-enter,
.modal-fade-leave-active
  opacity: 0

.modal-fade-enter-active,
.modal-fade-leave-active
  transition: opacity .5s ease

.modal-body
  position: relative
  padding: 45px 15px 20px 15px
  text-align: center
  font-size: 18px
  line-height: 28px


.btn-close
  position: absolute
  right: 14px
  top: 0
  border: none
  font-size: 20px
  cursor: pointer
  font-weight: bold
  color: #4AAE9B
  background: transparent
  display: flex
  align-items: flex-start
  margin-left: 25px


.btn-green
  color: white
  background: #4AAE9B
  border: 1px solid #4AAE9B
  border-radius: 2px

@media screen and (min-width: 768px)
  .modal-news
    width: 70%
    height: 50%
  .btn-close
    position: absolute
    top: 0
</style>