const styles = {
    pX: "px-4",
    pY: "py-4",
    navContainer: "md:grid md:grid-cols-3 md:gap-4",
    bgPrimary: "bg-zinc-100",
    textPrimary: "text-slate-700",
}

const layout = {
    navContainer: `${styles.navContainer} ${styles.bgPrimary} ${styles.textPrimary}`,
    padding: `block ${styles.pX} ${styles.pY} md:px-10`,
    menuPadding: `block ${styles.pX} ${styles.pY} hover:text-slate-400`,
    text: `${styles.textPrimary}`,
}

export default layout