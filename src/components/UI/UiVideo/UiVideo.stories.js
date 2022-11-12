import { checkPropTypes } from "prop-types";
import UiVideo from "./UiVideo";
import video from "./video/video.mp4";

export default {
  title: "Ui-Kit/Ui-video",
  component: UiVideo,
};

const Template = (args) => <UiVideo {...args} />;

const props = {
  src: video,
  classes: "",
};

export const Default = Template.bind({});
Default.args = {
  ...props,
};
