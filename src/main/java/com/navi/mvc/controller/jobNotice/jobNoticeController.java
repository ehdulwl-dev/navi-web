package com.navi.mvc.controller.jobNotice;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@Slf4j
@RequestMapping("/job")
@RequiredArgsConstructor


public class jobNoticeController {

    @GetMapping("/info")
    public String info(){
        log.debug("구직 공고 접속!");
        return "views/jobNotice/jobinfo";
    }

    @GetMapping("/active")
    public String active(){
        log.debug("지원 가능 구직 공고 접속!");
        return "views/jobNotice/analysis/all/allAnalysis_active";
    }

    @GetMapping("/unactive")
    public String unactive(){
        log.debug("지원 불가능 구직 공고 접속!");
        return "views/jobNotice/analysis/all/allAnalysis_unactive";
    }
}
