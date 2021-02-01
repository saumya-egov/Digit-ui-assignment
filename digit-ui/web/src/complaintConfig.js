export const config = {
  routes: {
    
    landmark: {
      nextStep: "houseno",
    },
   
    houseno: {
      component: "Selecthouseno",
      texts: {
        header: "House Number",
        cardText: "CS_COMPLAINT_HOUSE_TEXT",
        nextText: "PT_COMMONS_NEXT",
        skipText: "CORE_COMMON_SKIP_CONTINUE",
      },
      inputs: [
        {
          type: "text",
          name: "houseno",
          name: "custom.additionalDetails.houseno",
          validation: {
            minLength: 2,
            maxLength: 100,
          },
          error: "CORE_COMMON_PINCODE_INVALID",
        },
      ],
      nextStep: "upload-photos",
    },
  },
};
