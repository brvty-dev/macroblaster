document.addEventListener("DOMContentLoaded", () => {
  function sharePage({ title, text, url }) {
    if (navigator.share) {
      navigator.share({ title, text, url })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Web Share API not supported");
    }
  }

  document.getElementById("shareAerobics")?.addEventListener("click", () => {
    sharePage({
      title: "A Free Guide to Aerobic Exercise",
      text: "Check out this introductory guide to aerobic exercise.",
      url: "https://www.macroblaster.online/aerobic_exercise"
    });
  });

  document.getElementById("shareDirectory")?.addEventListener("click", () => {
    sharePage({
      title: "Directory of Professional Bodies",
      text: "Check out this free directory of professional bodies in the field of health and wellbeing.",
      url: "https://www.macroblaster.online/wellness_directory"
    });
  });

  document.getElementById("shareDirectoryaustralia")?.addEventListener("click", () => {
    sharePage({
      title: "Directory of Professional Bodies for Australia",
      text: "Check out this free directory of professional bodies in the field of health and wellbeing.",
      url: "https://www.macroblaster.online/wellness_directory_country/Australia"
    });
  });

  document.getElementById("shareDirectorycanada")?.addEventListener("click", () => {
    sharePage({
      title: "Directory of Professional Bodies for Canada",
      text: "Check out this free directory of professional bodies in the field of health and wellbeing.",
      url: "https://www.macroblaster.online/wellness_directory_country/Canada"
    });
  });

  document.getElementById("shareDirectorynew-zealand")?.addEventListener("click", () => {
    sharePage({
      title: "Directory of Professional Bodies for NZ",
      text: "Check out this free directory of professional bodies in the field of health and wellbeing.",
      url: "https://www.macroblaster.online/wellness_directory_country/New%20Zealand"
    });
  });

  document.getElementById("shareDirectorysouth-africa")?.addEventListener("click", () => {
    sharePage({
      title: "Directory of Professional Bodies for SA",
      text: "Check out this free directory of professional bodies in the field of health and wellbeing.",
      url: "https://www.macroblaster.online/wellness_directory_country/South%20Africa"
    });
  });

  document.getElementById("shareDirectoryunited-kingdom")?.addEventListener("click", () => {
    sharePage({
      title: "Directory of Professional Bodies for the UK",
      text: "Check out this free directory of professional bodies in the field of health and wellbeing.",
      url: "https://www.macroblaster.online/wellness_directory_country/United%20Kingdom"
    });
  });

  document.getElementById("shareDirectoryunited-kingdom")?.addEventListener("click", () => {
    sharePage({
      title: "Directory of Professional Bodies for the US",
      text: "Check out this free directory of professional bodies in the field of health and wellbeing.",
      url: "https://www.macroblaster.online/wellness_directory_country/United%20States"
    });
  });

  document.getElementById("shareInjury")?.addEventListener("click", () => {
    sharePage({
        title: "A Free Guide to Injury Rehab",
        text: "Check out this introductory guide to sports injury rehabilitation.",
        url: "https://www.macroblaster.online/injury_recovery"
    });
  });

  document.getElementById("shareMacroBlaster")?.addEventListener("click", () => {
    sharePage({
        title: "macroBLASTER",
        text: "Use this great free tool to target your daily macros and boost your exercise results!",
        url: "https://www.macroblaster.online/"
    });
  });

  document.getElementById("shareMacroBlasterB")?.addEventListener("click", () => {
    sharePage({
        title: "macroBLASTER",
        text: "Use this great free tool to target your daily macros and boost your exercise results!",
        url: "https://www.macroblaster.online/"
    });
  });

  document.getElementById("shareMacros")?.addEventListener("click", () => {
    sharePage({
        title: "A Free Guide to Macros",
        text: "Check out this introductory guide to macronutrients.",
        url: "https://www.macroblaster.online/what_are_macros"
    });
  });

  document.getElementById("shareResistance")?.addEventListener("click", () => {
    sharePage({
        title: "A Free Guide to Resistance Training",
        text: "Check out this introductory guide to resistance (strength) training.",
        url: "https://www.macroblaster.online/resistance_training"
    });
  });

  document.getElementById("shareWarmup")?.addEventListener("click", () => {
    sharePage({
        title: "A Free Guide to Warming Up",
        text: "Check out this introductory guide to warming up for exercise.",
        url: "https://www.macroblaster.online/warming_up"
    });
  });

  document.getElementById("shareGuides")?.addEventListener("click", () => {
    sharePage({
        title: "macroBLASTER's Free Guides",
        text: "Check out all macroBLASTER's free guides here.",
        url: "https://www.macroblaster.online/guides"
    });
  });
});