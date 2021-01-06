package common.board;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import common.EmpDAO;
import common.EmployeeVO;


@WebServlet("/boardlist")
public class PutBoardServlet2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public PutBoardServlet2() {
        super();
      
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BoardDAO dao = new BoardDAO();
		List<BoardVO> list = dao.getborList();
		String xml = "<dataset>";
		for(BoardVO bor : list) {
		xml += "<record>";
		xml += "<boardNO>"+bor.getBoardNO()+"</boardNO>"
				+ "<title>"+bor.getTitle()+"</title>"
				+ "<content>"+bor.getContent()+"</content>"
				+ "<writer>"+bor.getWriter()+"</writer>"
				+ "<creationDate>"+bor.getCreationDate()+"</creationDate>";
		xml += "</record>";
		
		}
		xml += "</dataset>";
		
		response.getWriter().append(xml);
	}
		
		
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
