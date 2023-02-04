import React, { FC, useState } from "react";

import styles from "./GroupsSection.module.scss";
import GroupItem from "@/components/pages/Profile/Admin/GroupsSection/GroupItem/GroupItem";
import { GroupType } from "@/types/group.types";
import GroupSearch from "@/components/pages/Profile/Admin/GroupsSection/GroupSearch/GroupSearch";
import Button from "@/components/UI/Button/Button";
import { AnimatePresence } from "framer-motion";
import { api } from "@/store/api/api";
import { Roles } from "@/types/user.types";
import GroupCreateModal from "@/components/pages/Profile/Admin/GroupsSection/GroupCreateModal/GroupCreateModal";

const GroupsSection: FC = () => {
  const [groups, setGroups] = useState<GroupType[]>([]);
  const [modalShown, setModalShown] = useState<boolean>(false);

  const theoryTeachers = api.useGetUsersByTypeQuery({
    role: Roles.THEORY_TEACHER
  }).data;

  const practiceTeachers = api.useGetUsersByTypeQuery({
    role: Roles.PRACTICE_TEACHER
  }).data;

  const categories = api.useGetCategoriesQuery().data;

  return (
    <section className={styles.section}>
      <GroupSearch modalShown={modalShown} setGroups={setGroups} />
      <div>
        <div>
          <h2>Группы ({groups.length})</h2>
          <Button onClick={() => setModalShown(true)} primary>
            Создать группу
          </Button>
        </div>
        <ul>
          {groups.map((group) => (
            <li key={group.id}>
              <GroupItem group={group} />
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence>
        {modalShown && theoryTeachers && practiceTeachers && categories && (
          <GroupCreateModal
            modalShown={modalShown}
            setModalShown={setModalShown}
            groupsLength={groups.length}
            theoryTeachers={theoryTeachers}
            practiceTeachers={practiceTeachers}
            categories={categories}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default GroupsSection;