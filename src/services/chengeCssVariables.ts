export const chengeCssVariables = (theme: any) => {
  const root: any = document.querySelector(":root");

  root.style.setProperty(
    "--theme-default-bgimage",
    `var(--theme-${theme}-bgimage)`
  );

  const cssVariables = ["header", "bgimage"];

  cssVariables.forEach((element) => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );
  });
};
