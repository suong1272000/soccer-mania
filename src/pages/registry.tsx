import React, { ReactNode } from "react";

type LayoutProps = {
	children: ReactNode;
};

const Registry = ({ children }: LayoutProps) => {
	// 서버에서 수집한 HTML을 동적으로 삽입하는 훅
	const useServerInsertedHTML = () => {
		// 서버에서 수집한 HTML을 어떻게 가져올지 구현
		// 여기서는 단순히 빈 문자열을 반환하는 것으로 가정
		return "";
	};

	// 서버에서 수집한 HTML을 삽입
	React.useEffect(() => {
		const serverHTML = useServerInsertedHTML();
		if (serverHTML) {
			const head: any = document.querySelector("head");
			head.insertAdjacentHTML("beforeend", serverHTML);
		}
	}, []);

	// children을 레지스트리 컴포넌트로 감싸서 반환
	return <div className="registry">{children}</div>;
};

export default Registry;
