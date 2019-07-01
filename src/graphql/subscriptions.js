// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateQuestionnaire = `subscription OnCreateQuestionnaire {
  onCreateQuestionnaire {
    id
    name
    questions {
      items {
        id
        type
        content
        sortNo
      }
      nextToken
    }
  }
}
`;
export const onUpdateQuestionnaire = `subscription OnUpdateQuestionnaire {
  onUpdateQuestionnaire {
    id
    name
    questions {
      items {
        id
        type
        content
        sortNo
      }
      nextToken
    }
  }
}
`;
export const onDeleteQuestionnaire = `subscription OnDeleteQuestionnaire {
  onDeleteQuestionnaire {
    id
    name
    questions {
      items {
        id
        type
        content
        sortNo
      }
      nextToken
    }
  }
}
`;
export const onCreateQuestion = `subscription OnCreateQuestion {
  onCreateQuestion {
    id
    type
    content
    sortNo
    questionnaire {
      id
      type
      content
      sortNo
      questionnaire {
        id
        type
        content
        sortNo
      }
      questionDetail {
        nextToken
      }
    }
    questionDetail {
      items {
        id
        content
        sortNo
      }
      nextToken
    }
  }
}
`;
export const onUpdateQuestion = `subscription OnUpdateQuestion {
  onUpdateQuestion {
    id
    type
    content
    sortNo
    questionnaire {
      id
      type
      content
      sortNo
      questionnaire {
        id
        type
        content
        sortNo
      }
      questionDetail {
        nextToken
      }
    }
    questionDetail {
      items {
        id
        content
        sortNo
      }
      nextToken
    }
  }
}
`;
export const onDeleteQuestion = `subscription OnDeleteQuestion {
  onDeleteQuestion {
    id
    type
    content
    sortNo
    questionnaire {
      id
      type
      content
      sortNo
      questionnaire {
        id
        type
        content
        sortNo
      }
      questionDetail {
        nextToken
      }
    }
    questionDetail {
      items {
        id
        content
        sortNo
      }
      nextToken
    }
  }
}
`;
export const onCreateQuestionDetail = `subscription OnCreateQuestionDetail {
  onCreateQuestionDetail {
    id
    content
    sortNo
    question {
      id
      type
      content
      sortNo
      questionnaire {
        id
        type
        content
        sortNo
      }
      questionDetail {
        nextToken
      }
    }
  }
}
`;
export const onUpdateQuestionDetail = `subscription OnUpdateQuestionDetail {
  onUpdateQuestionDetail {
    id
    content
    sortNo
    question {
      id
      type
      content
      sortNo
      questionnaire {
        id
        type
        content
        sortNo
      }
      questionDetail {
        nextToken
      }
    }
  }
}
`;
export const onDeleteQuestionDetail = `subscription OnDeleteQuestionDetail {
  onDeleteQuestionDetail {
    id
    content
    sortNo
    question {
      id
      type
      content
      sortNo
      questionnaire {
        id
        type
        content
        sortNo
      }
      questionDetail {
        nextToken
      }
    }
  }
}
`;
