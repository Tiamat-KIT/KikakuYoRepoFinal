import Link from "next/link";

export default function Footer(){
    return (
        <footer className="footer p-10">
            <nav>
                <header className="footer-title">Contact & copyright©{new Date().getFullYear()}</header>
                <Link href={""} className="link link-hover">
                金沢工業大学<br />学生ステーション企画担当
                </Link>
            </nav>
        </footer>
    )
}