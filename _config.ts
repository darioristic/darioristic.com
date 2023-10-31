import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import imagick from "lume/plugins/imagick.ts";
import metas from "lume/plugins/metas.ts";

const site = lume();

site.use(date());
site.use(imagick());
site.use(metas());

export default site;
