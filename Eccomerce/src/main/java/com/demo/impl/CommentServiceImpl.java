package com.demo.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.demo.dao.CommentDao;
import com.demo.dao.ProductDao;
import com.demo.entity.Comment;
import com.demo.entity.Product;
import com.demo.service.CommentService;

@Transactional
@Component
public class CommentServiceImpl implements CommentService{
	
	@Autowired
	private CommentDao commentDao;
	
	@Autowired
	private ProductDao productDao;

	@Override
	public Comment addCommentToProduct(Comment comment, long idProduct) {
		Product product = productDao.findById(idProduct).orElse(null);
		comment.setAddedAt(new Date());
		product.addCommentToProduct(comment);
		return commentDao.save(comment);
	}

	@Override
	public Comment editComment(Comment comment, long id) {
		Comment existComponent = commentDao.findById(id).orElse(null);
		existComponent.setTitle(comment.getTitle());
		existComponent.setMessage(comment.getMessage());
		existComponent.setAddedAt(new Date());
		existComponent.setAddedBy(comment.getAddedBy());
		return commentDao.save(existComponent);
	}

	@Override
	public Comment findCommentById(long id) {
		return commentDao.findById(id).orElse(null);
	}

	@Override
	public void deleteComment(long id) {
		commentDao.deleteById(id);
	}

	@Override
	public List<Comment> findCommentsForProduct(long idProduct) {
		Product product = productDao.findById(idProduct).orElse(null);      
		return product.getComments();
	}

	@Override
	public List<Comment> findAllComments() {
		return commentDao.findAll();
	}
	

}