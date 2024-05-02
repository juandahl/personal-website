import ArticleList from "../article/list/articleList";
import styles from "./styles.module.scss";

export default function Landing() {
	return (
		<div className="relative">
			<div className={styles.navbar}>
				<h3>Blog</h3>
			</div>
			<div className={styles.background}>
				<div className={styles["background--content"]}>
					<h1 className={styles.title}>
						Inspiration for devs in
						<span className={styles["title--one"]}> one </span>
						<span className={styles["title--one"]}> click!</span>
					</h1>
				</div>
			</div>

			<div className={styles.content}>
				<section className={styles.section}>
					<ArticleList />
				</section>
			</div>
		</div>
	);
}
