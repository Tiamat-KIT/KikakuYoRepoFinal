import Link from "next/link";

export default function Modal():JSX.Element {
  return (
    <>
      <button className="btn btn-ghost" onClick={()=> {(document.getElementById('my_modal_5') as HTMLDialogElement).showModal()}}>
        ～概要～
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">このページはどういうページ？</h3>
          <p className="py-4">
            先輩たちが過去に資格取得や自己研鑽としてどんなことに取り組んだか<br />
            わかるページだよ！ぜひ参考にしてね！
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">
                Close
                <Link href={"/"} />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
