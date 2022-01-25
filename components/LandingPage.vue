<template>
  <div class="text-gray-900">
    <!-- Hero -->
    <div class="bg-gradient-to-r from-primary/60 via-primary/30 to-primary/15">
      <div
        class="
          min-h-screen
          lg:max-w-7xl
          flex flex-col
          justify-center
          items-start
          px-6
          mx-auto
        "
      >
        <div class="flex flex-col lg:flex-row items-center min-w-full">
          <div class="order-last lg:order-first mr-auto">
            <div class="font-medium text-4xl text-gray-800 mb-5">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div class="text-xl text-gray-700 mb-12">
              Officiis molestias fugiat asperiores tempore tenetur
            </div>
            <nuxt-link
              to="/sign-up"
              class="
                bg-primary
                hover:bg-opacity-90
                text-lg text-gray-100
                px-6
                py-3
                rounded
                focus:outline-none
                focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
                shadow-md
              "
            >
              <span class="text-base mr-1"
                ><font-awesome-icon icon="user-plus"
              /></span>
              <span>Sign up now</span>
            </nuxt-link>
          </div>

          <img
            src="~/assets/images/hero-vector.svg"
            class="
              self-end
              order-first
              lg:order-last
              max-w-xs
              lg:max-w-md
              mb-10
            "
          />
        </div>
      </div>
    </div>

    <!-- Features -->
    <div class="lg:max-w-7xl px-6 mx-auto mb-16">
      <div class="text-3xl text-gray-700 my-10">Features</div>
      <div
        class="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          md:gap-x-10
          gap-y-10
          lg:gap-y-16
        "
      >
        <div
          v-for="feature in 'abcdef'"
          :key="feature"
          class="px-4 py-6 rounded shadow"
        >
          <div class="mb-4">
            <font-awesome-icon icon="shield-alt" class="text-primary mr-1" />
            <span class="text-xl">Reliable</span>
          </div>
          <div class="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem amet
            in odio praesentium numquam minima!
          </div>
        </div>
      </div>
    </div>

    <!-- Plans -->
    <div class="bg-[#1D3557] pb-16">
      <div class="min-h-screen lg:max-w-7xl px-6 mx-auto">
        <div class="text-3xl text-gray-300 pt-10 my-10">Plans</div>
        <div
          class="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            md:gap-x-10
            gap-y-10
            lg:gap-y-16
          "
        >
          <div
            v-for="plan in ['Basic', 'Pro', 'Premium']"
            :key="plan"
            class="
              bg-white
              p-6
              rounded
              transition-all
              hover:transform
              hover:-translate-y-2
              shadow
            "
          >
            <div class="text-xl mb-2 text-primary/80">
              <font-awesome-icon v-if="plan == 'Basic'" icon="box-open" />
              <font-awesome-icon v-if="plan == 'Pro'" icon="gift" />
              <font-awesome-icon v-if="plan == 'Premium'" icon="gem" />
            </div>
            <div class="text-xl mb-4">{{ plan }} Plan</div>

            <hr class="border-1 border-gray-100 mb-4" />

            <div
              v-for="item in 'abcdefg'"
              :key="item"
              class="text-gray-600 mb-4 cursor-default"
            >
              <span class="text-xs text-green-500 mr-2">
                <font-awesome-icon icon="check" />
              </span>
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <div class="flex flex-row items-center justify-end mt-8">
              <button
                type="button"
                class="
                  bg-primary
                  hover:bg-primary/90
                  text-gray-100
                  px-4
                  py-2
                  rounded
                  focus:outline-none
                  focus:ring-2 focus:ring-primary/20 focus:ring-offset-2
                  shadow-md
                "
              >
                Get Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
};
</script>

<style>
</style>
